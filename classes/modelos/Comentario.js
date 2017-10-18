"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comentario = (function () {
    function Comentario(comentario, autor) {
        this.data = new Date();
        this.comentario = comentario;
        this.autor = autor;
    }
    ;
    return Comentario;
}());
exports.Comentario = Comentario;
