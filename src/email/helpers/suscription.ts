import { SuscriptionDto } from "../dto/subcription.dto";

export default function suscriptionEmail(createEmailDto: SuscriptionDto): string {
  return `<!DOCTYPE html>
               <html>
               <head>
                   <meta charset="UTF-8">
                   <title>Email Template</title>
                   <style>
                       body {
                           font-family: Arial, sans-serif;
                           background-color: #FAE8B3;
                           margin: 0;
                           padding: 20px;
                       }
                       .container {
                           max-width: 600px;
                           background: #FFF;
                           padding: 20px;
                           border-radius: 10px;
                           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                           text-align: center;
                       }
                       .header {
                           background: linear-gradient(to right, #5A7F4E, #88B04B);
                           color: white;
                           padding: 15px;
                           font-size: 22px;
                           font-weight: bold;
                           border-radius: 10px 10px 0 0;
                       }
                       .content {
                           padding: 20px;
                           font-size: 16px;
                           color: #333;
                       }
                       .footer {
                           text-align: center;
                           padding: 10px;
                           font-size: 12px;
                           color: #666;
                       }
                       .badge {
                           display: inline-block;
                           background: #D4E157;
                           padding: 10px 20px;
                           margin: 5px;
                           border-radius: 20px;
                           font-size: 14px;
                           font-weight: bold;
                           color: #333;
                       }
                   </style>
               </head>
               <body>
                   <div class="container">
                       <div class="header">
                           ¡Hola, ${createEmailDto.email}!
                       </div>
                       <div class="content">
                           <p>${createEmailDto.email}</p>
                         
                       </div>
                       <div class="footer">
                           <p>Gracias por tu mensaje.</p>
                       </div>
                   </div>
               </body>
               </html>`;
}