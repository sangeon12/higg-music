const cheerio = require('cheerio');
const request = require('request');


    function getMelonChart(){
        const url = "https://www.melon.com/chart/";

        return new Promise((resolve, reject) =>{
            request(url, (err, res, body)=>{
                const $ = cheerio.load(body);
                let result = [];
    
                for(let i = 0; i < 100; i++){
                    let src = $('.image_typeAll > img').eq(i).attr('src');
                    let title = $('.ellipsis.rank01 > span > a').eq(i).text();
                    let artist = '';
                    $('.checkEllipsis').eq(i).each(function(){
                        let artistInfo = $(this);
                        artist = artistInfo.text();
                    })
                    result.push({img:src, title:title, artist:artist});
                    resolve({result});
                }
        });
        });
    }

    module.exports.getMelonChart = getMelonChart;