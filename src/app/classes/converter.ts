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
        //console.log(input);
        let output : string;
        output = "";
        for(let r in input){
            //console.log(input[r].SongId);
            output += input[r].SongId + ",";
        }
        output = output.slice(0,output.length-1);
        //console.log(output);
        return output;
    }
    
    convertFromString(input){
        this.ldTstData(10);
        let output : Song[];
        output = [];
        //console.log(input);
        let r = 0;
        while(r < input.length){
            let id = "";
            while(input[r] != "," && r < input.length){
                id += input[r];
                r++;
                //console.log(r);
                //console.log(id);
            }
            output.push(this.testData[id.trim()]);
            r++;
        }
        //console.log(output);
        return output;
    }
}