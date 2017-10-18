/**
 * Created by mathias on 03/10/17.
 */
import {Post} from './classes/modelos/Post';
import {Autor} from './classes/modelos/Autor';

class Main{

    constructor(){
        this.main();
    }

    main(){
        const post = new Post('Começando com TypeScript', 'blablablabla');

        const tag : Array<string> = [
            'desenvolvimento',
            'node.js',
            'typescript',
            'tudo publico'
        ];

        const autor : Array<Autor> = [
            new Autor('Mathias Gheno Azzolini','Mais um desenvolvedor')
        ];

        post.tags = tag;
        post.autores = autor;
        post.persistirMongodb(()=>{
            console.log('tudo pronto');
        });
    }
} new Main();