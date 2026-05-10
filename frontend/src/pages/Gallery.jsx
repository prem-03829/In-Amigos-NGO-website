import PageHeader from '../components/PageHeader';
import Masonry from '../components/Masonry';

const Gallery = () => {
  const items = [
    { id: "1", img: "/images/gallery/image_1.JPG", url: "", height: 600 },
    { id: "2", img: "/images/gallery/image_2.jpg", url: "", height: 400 },
    { id: "3", img: "/images/gallery/image_3.jpg", url: "", height: 700 },
    { id: "4", img: "/images/gallery/image_4.jpg", url: "", height: 450 },
    { id: "5", img: "/images/gallery/image_5.jpg", url: "", height: 550 },
    { id: "6", img: "/images/gallery/image_6.jpg", url: "", height: 400 },
    { id: "7", img: "/images/gallery/image_7.jpg", url: "", height: 600 },
    { id: "8", img: "/images/gallery/image_8.jpg", url: "", height: 400 },
    { id: "9", img: "/images/gallery/image_9.jpg", url: "", height: 500 },
    { id: "10", img: "/images/gallery/image_10.jpg", url: "", height: 450 },
    { id: "11", img: "/images/gallery/image_11.jpg", url: "", height: 550 },
    { id: "12", img: "/images/gallery/image_12.jpg", url: "", height: 400 },
    { id: "13", img: "/images/gallery/image_13.jpg", url: "", height: 650 },
    { id: "14", img: "/images/gallery/image_14.jpg", url: "", height: 400 },
    { id: "15", img: "/images/gallery/image_15.jpg", url: "", height: 750 },
    { id: "16", img: "/images/gallery/image_16.jpg", url: "", height: 450 },
    { id: "17", img: "/images/gallery/image_17.jpg", url: "", height: 550 },
    { id: "18", img: "/images/gallery/image_18.jpg", url: "", height: 400 },
    { id: "19", img: "/images/gallery/image_19.jpg", url: "", height: 600 },
    { id: "20", img: "/images/gallery/image_20.jpg", url: "", height: 450 },
    { id: "21", img: "/images/gallery/image_21.jpeg", url: "", height: 500 },
    { id: "22", img: "/images/gallery/image_22.jpg", url: "", height: 700 },
    { id: "23", img: "/images/gallery/image_23.jpg", url: "", height: 450 },
  ];

  return (
    <main>
      <PageHeader 
        title="Our Gallery" 
        subtitle="Capturing moments of change, empowerment, and community impact across India."
      />
      
      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24 min-h-[1000px]">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.03}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.97}
            blurToFocus
            colorShiftOnHover={true}
          />
        </div>
      </section>
    </main>
  );
};

export default Gallery;
