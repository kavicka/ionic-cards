import { Component } from '@angular/core';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { Capability } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.cities.sort((a,b) => a.votes > b.votes ? 1 : 0);
    console.log(this.cities);
  }

  cities: { id: number, cityName: string, state: string, paragraph: string, url: string, 
  buttonTitle: string, resetVotes: string, info: string, info2: string, info3: string,
  favouriteBtn: string, votes: number, maxVotesMessage: string, info4: string
  hide: boolean, hideVote: boolean, fav: boolean, isDisabled: boolean, fill: string,
  icon1: string, icon2: string, icon3: string, icon4: string}[] = [
    {
      id: 0,
      cityName: "Prague",
      state: "Czech Republic",
      paragraph: "Prague is the capital city of Czech Republic and an amazing place to live. It's quite large city, but you can travel so fast, because there is a metro build.",
      url: "https://wallpaperaccess.com/full/41212.jpg",
      buttonTitle: "VOTE",
      resetVotes: "Reset votes",
      info: "Prague is the 14th largest city in the European Union",
      info2: "Prague is home to about 1.3 million people",
      info3: "Highest elevation has 399 m (1,309 ft)",
      info4: "Lowest elevation has 177 m (581 ft)",
      favouriteBtn: "Favourite",
      votes: 0,
      maxVotesMessage: "",
      hide: false,
      hideVote: true,
      fav: false,
      isDisabled: false,
      fill: "clear",
      icon1: "pie",
      icon2: "people",
      icon3: "arrow-dropup-circle",
      icon4: "arrow-dropdown-circle"
    },
    {
      id: 1,
      cityName: "Bratislava",
      state: "Slovakia",
      paragraph: "Bratislava is the capital of Slovakia, it is one of the smaller capitals of Europe but still the country's largest city.",
      url: "http://www.ewallpapers.eu/sites/default/files/styles/1920x1080/public/bratislava-69904-6611510.jpg?itok=fH-55dAH",
      buttonTitle: "VOTE",
      resetVotes: "Reset votes",
      info: "Bratislava is one of the smallest capitals in Europe.",
      info2: "Bratislava is home to about 424,428 people",
      info3: "Mayor is Matúš Vallo",
      info4: "First mentioned	907",
      favouriteBtn: "Favourite",
      votes: 0,
      maxVotesMessage: "",
      hide: false,
      hideVote: true,
      fav: false,
      isDisabled: false,
      fill: "clear",
      icon1: "podium",
      icon2: "people",
      icon3: "nuclear",
      icon4: "pin"
    },
    {
      id: 2,
      cityName: "London",
      state: "United Kingdom",
      paragraph: "London is the capital and largest city of England and the United Kingdom. London has a diverse range of people and cultures, and more than 300 languages are spoken in the region.",
      url: "https://www.setaswall.com/wp-content/uploads/2018/04/London-UK-Wallpaper-25-1920x1080.jpg",
      buttonTitle: "VOTE",
      resetVotes: "Reset votes",
      info: "London is the largest city in Europe.",
      info2: "London is home to about 8,778,500 people",
      info3: "Metro has 8,382 km2",
      info4: "UK Parliament has 73 constituencies",
      favouriteBtn: "Favourite",
      votes: 0,
      maxVotesMessage: "",
      hide: false,
      hideVote: true,
      fav: false,
      isDisabled: false,
      fill: "clear",
      icon1: "podium",
      icon2: "people",
      icon3: "bus",
      icon4: "star"
    }
  ]

  vote(id) {
    this.cities = this.cities.map(function(city) {
    
      if (city.id === id)
      {
        
        if (city.votes < 10) {
          city.votes += 1;
        }
    
        else 
        {
          city.votes = 10;
          city.hide = true;
          city.hideVote = false;
          city.maxVotesMessage = "You've reached max number of votes, please use Reset Votes button to reset.";
        }
      }
      return city;
  })
}

reset(id) {
  this.cities = this.cities.map(function(city) {
    if (city.id === id)
    {
      city.votes = 0;
      city.maxVotesMessage = "";
      
      city.hide = false;
      city.hideVote = true;
    }
    return city;
  })
}

favourite(id) 
{
  this.cities = this.cities.map(function(city) {

    city.isDisabled = false;
    city.fav = false;

    if (city.id === id)
    {
      city.isDisabled = true;

      city.fav = true;
    }
    return city;
  })
}

  visited(id) 
  {
    this.cities = this.cities.map(function (city) {
      if (city.id === id) 
      {
        city.fill = "outline";
      }
      return city;
    })
  }
}