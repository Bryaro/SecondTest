import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [{
    Title: "Harry Zotter 1",
    imdbID: "1",
    Type: "fantacy",
    Poster: "Harry Potter 1",
    Year: "2001",
  },{
    Title: "Harry Potter 2",
    imdbID: "2",
    Type: "fantacy",
    Poster: "Harry Potter 2",
    Year: "2002",
  },{   
    Title: "Harry Potter 3",
    imdbID: "3",
    Type: "fantacy",
    Poster: "Harry Potter 3",
    Year: "2003"},];

    export const getData = async (): Promise<IMovie[]> => {
        return new Promise((resolve, reject)=> {
          let searchText: string = "hej";

          if(searchText)resolve(mockData)
          else reject("ingen data hittades")
        });
    };

