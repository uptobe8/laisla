#!/bin/bash
cd "$(dirname "$0")/APP"
PORT=8080
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "localhost")
echo ""
echo "LA ISLA 3D"
echo "Ordenador: http://localhost:$PORT/ABRIR_JUEGO.html"
echo "Móvil en la misma Wi‑Fi: http://$IP:$PORT/ABRIR_JUEGO.html"
echo ""
open "http://localhost:$PORT/ABRIR_JUEGO.html"
python3 -m http.server "$PORT" --bind 0.0.0.0
