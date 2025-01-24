import { SuscriptionDto } from "../dto/subcription.dto";

export default function suscriptionEmail(createEmailDto: SuscriptionDto): string {
    return `<!DOCTYPE html>
               <html>
               <head>
                   <meta charset="UTF-8">
                   <title>Email Template</title>
                   <style>
                      body {
                        font-family: 'Inter', sans-serif;
                        background-color: #000000;
                         display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100vw;
                        height: 100vh;
                        position: relative;
                        }

                        * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        }

                        .main {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100vw;
                        height: 100vh;
                        position: relative;

                        }

                        .container {
                        padding: 70px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        max-width: 841px;
                        max-height: 505px;
                        height: 505px;
                        width: 841px;
                        background-color: #FFFFFF;
                        border-radius: 50px;
                        }   
                        .button {
                            width: 205px;
                            height: 39px;
                            background-color: #E6FC15;
                            font-size: 15px;
                            font-weight: 700;
                            border: none;
                            border-radius: 50px;
                            cursor: pointer;
                            }

                            .button:hover {
                            pointer-events: stroke;
                            background-color: #f2fe7d;
                            }

                            .button:active {
                            background-color: #c8db10;
                            }
                   </style>
               </head>
               <body>
                   <div class="container">
                       <div class="button">
                           ¡Hola, ${createEmailDto.email}!
                       </div>
                           <p>Gracias por tu suscripción</p>
                   </div>
               </body>
               </html>`;
}