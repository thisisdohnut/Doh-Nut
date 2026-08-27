/**
 * High-Resolution SVG and PNG Export Utilities for DOH-NUT Brand System
 */

export interface ExportOptions {
  filename: string;
  svgString: string;
  width?: number;
  height?: number;
  scale?: number; // 1, 2, 4
  backgroundColor?: string; // transparent or hex
}

/**
 * Triggers a direct browser file download for a Blob
 */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Downloads raw SVG string as an .svg vector file
 */
export function downloadSvgFile(svgString: string, filename: string) {
  const cleanSvg = ensureSvgXmlDeclaration(svgString);
  const blob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
  const finalName = filename.endsWith('.svg') ? filename : `${filename}.svg`;
  downloadBlob(blob, finalName);
}

/**
 * Ensures standard SVG XML attributes and namespaces are present for standalone files
 */
export function ensureSvgXmlDeclaration(svgString: string): string {
  let formatted = svgString.trim();
  if (!formatted.includes('xmlns="http://www.w3.org/2000/svg"')) {
    formatted = formatted.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!formatted.includes('xmlns:xlink="http://www.w3.org/1999/xlink"')) {
    formatted = formatted.replace('<svg', '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }
  if (!formatted.startsWith('<?xml')) {
    formatted = `<?xml version="1.0" encoding="UTF-8"?>\n${formatted}`;
  }
  return formatted;
}

/**
 * Converts an SVG string into a High-Resolution PNG using an off-screen HTML5 Canvas
 */
export async function exportSvgToPng({
  svgString,
  filename,
  width = 800,
  height = 800,
  scale = 2,
  backgroundColor = 'transparent'
}: ExportOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const cleanSvg = ensureSvgXmlDeclaration(svgString);
      const svgBlob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        const targetWidth = (width || img.naturalWidth || 800) * scale;
        const targetHeight = (height || img.naturalHeight || 800) * scale;

        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          URL.revokeObjectURL(url);
          reject(new Error('Could not obtain canvas 2D rendering context'));
          return;
        }

        // Fill background if not transparent
        if (backgroundColor && backgroundColor !== 'transparent') {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, targetWidth, targetHeight);
        } else {
          ctx.clearRect(0, 0, targetWidth, targetHeight);
        }

        // Better image smoothing for crisp text and line art
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw image onto high-resolution scaled canvas
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        URL.revokeObjectURL(url);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const finalName = filename.endsWith('.png') ? filename : `${filename}.png`;
              downloadBlob(blob, finalName);
              resolve();
            } else {
              reject(new Error('Failed to generate PNG blob from canvas'));
            }
          },
          'image/png',
          1.0
        );
      };

      img.onerror = (err) => {
        URL.revokeObjectURL(url);
        reject(err);
      };

      img.src = url;
    } catch (e) {
      reject(e);
    }
  });
}
