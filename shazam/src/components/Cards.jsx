import axios from "axios";
import React, { useEffect, useState } from "react";

function Card() {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
    params: {id: '40008598', locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': '092252505emsh316839feb3932f9p1a9a8ajsn511efab345ee',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return setTracks(response.data.tracks);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
    setLoading(true);
  }, []);

  return (
    <div className="flex flex-row carousel w-full gap-3 bg-none mt-5">
      {tracks.map((track) => (
        <div className="card carousel-item relative  w-96 bg-base-100 ">
          <div>
            <img src={track.images.coverart} />
            <div className="card-body">
              <h2 className="card-title bg-red-100">{track.title}</h2>
              <h2 className="card-title bg-red-100">{track.subtitle}</h2>
              <h2 className="card-title bg-red-100">{track.artists.adamid}</h2>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;