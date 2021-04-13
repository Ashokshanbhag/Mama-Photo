var images = ["PSX_20210412_110914.jpg",
              "PSX_20180704",
              "kerala trip-8th mth (22).jpg",
              "033.jpg",
              "87 (1).jpg",
              "629.jpg",
              "909.jpg","DSCN3328 (1).jpg",
              "DSCN2466(1).jpg",
              "20190822_162258.jpg",
              "20190402_163356.jpg",
              "20190401_151714.jpg",
              "20190323_101713.jpg",
              "20190323_101658.jpg",
              "PSX_20180312_075438(1).jpg",
              "PSX_20190326_223937 (1).jpg",
              "PSX_20190831_012234-01.jpg",
              "PSX_20191215_191957.jpg",
              "PSX_20210404_160239.jpg",
              "PSX_20210410_233552.jpg"];

var i=0;
function next(){
  if(i==19){
    i=0;
  }document.getElementById("album").src=images[i];
  i++;
}
