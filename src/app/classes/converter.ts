import { Song } from './song';

export class Converter {
    testData : Song[]

    ldTstData(count){
        this.testData = [];
        for(let r = 0; r<count; r++){
            let s = new Song();
            s.SongId = r;
            s.SongName = "song" + r;
            s.Album = "alb" + r;
            s.Artist = "art" + r;
            s.GenreId = r;
            s.ChildFriendly = false;
            this.testData.push(s);
        }
        console.log(this.testData);
    }
    convertToString(input){

    }
    
    convertFromString(input){
        this.ldTstData(10);
        let output : Song[];
        output = [];
        console.log(input);
        for(let r in input){
            if(input[r] != ","){
                output.push(this.testData[input[r]]);
            }
        }
        console.log(output);
    }
}