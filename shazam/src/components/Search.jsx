import { React, useState, useEffect} from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import axios from "axios";
function Search() {
  const [loading, setLoading] = useState(false)
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  
    // state = {
    //   searchTerm: ''
    // };
    const [searchTerm , setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = event => {

      event.preventDefault();
      console.log(searchTerm)
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: searchTerm, locale: 'en-US', offset: '0', limit: '5'},
        headers: {
          'X-RapidAPI-Key': '092252505emsh316839feb3932f9p1a9a8ajsn511efab345ee',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data.tracks.hits);
        setLoading(true)
        setSearchResults(response.data.tracks.hits)
      }).catch(function (error) {
        console.error(error);
      });
      // axios
      //   .get(`https://www.shazam.com/shazam/v2/en-US/GB/web/-/tracks/web_chart_world`, { params: { q: searchTerm } })
      //   .then(response => {
      //     setSearchResults(response.data.results);
      //   });
    };
  
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

    // const axios = require("axios");
    const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
  headers: {
    'X-RapidAPI-Key': '092252505emsh316839feb3932f9p1a9a8ajsn511efab345ee',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};
    
useEffect(() =>{
  const fetchData = async () =>{
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  fetchData()

} ,[])
  
  
  // render(){
    // const { searchTerm } = this.state;
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <motion.img
          src={require("../img/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />{" "}
        <motion.img
          src={require("../img/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />{" "}
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <form onSubmit={handleSubmit} className="searchbar flex justify-start w-[100%]">
          <input
            value={searchTerm}
            onChange={handleChange}
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <button type="submit" className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../img/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </button>
        </form>
        { 
        loading && searchResults.map(track => (
            <div key={track.track.title}>{track.track.title}<img src={track.track.images.coverart} /> </div>
      ))}
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        {/* Music Player */}
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );


}
  

export default Search;
