import { Controller, Get, Res } from '@nestjs/common';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import { Response } from 'express';


@Controller('pdf')
export class PdfController {
  private readonly pdfFilename = 'Franco_Dev_2025.pdf';
  private readonly pdfPath = join(__dirname, '..', 'public', 'pdfs', this.pdfFilename);

  @Get('download')
  downloadPdf(@Res() res: Response) {
    console.log('Ruta del archivo PDF:', this.pdfPath);

    // Verificar si el archivo existe
    if (!existsSync(this.pdfPath)) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    // Crear un flujo de lectura del archivo
    const fileStream = createReadStream(this.pdfPath);

    // Establecer las cabeceras para la descarga
    res.setHeader('Content-Disposition', `attachment; filename="${this.pdfFilename}"`);
    res.setHeader('Content-Type', 'application/pdf');

    // Pipe del archivo al cliente
    fileStream.pipe(res);

    // Manejo de errores en caso de que el flujo falle
    fileStream.on('error', (err) => {
      console.error('Error al leer el archivo:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    });
  }
}
