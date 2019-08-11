export class Post{

    _title: string;
    _content: string;
    _created_at = new Date();
    _loveIts: number;

    constructor(title : string, content : string, loveits : number, created_at?){
        this._title = title;
        this._content = content;
        this._created_at = created_at;
        this._loveIts = loveits;
    }
    
    }