"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by mathias on 03/10/17.
 */
var Post_1 = require("./classes/modelos/Post");
var Autor_1 = require("./classes/modelos/Autor");
var Main = (function () {
    function Main() {
        this.main();
    }
    Main.prototype.main = function () {
        var post = new Post_1.Post('Começando com TypeScript', 'blablablabla');
        var tag = [
            'desenvolvimento',
            'node.js',
            'typescript',
            'tudo publico'
        ];
        var autor = [
            new Autor_1.Autor('Mathias Gheno Azzolini', 'Mais um desenvolvedor')
        ];
        post.tags = tag;
        post.autores = autor;
        post.persistirMongodb(function () {
            console.log('tudo pronto');
        });
    };
    return Main;
}());
new Main();
