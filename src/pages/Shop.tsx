import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ToolCard } from "@/components/shop/ToolCard";
import { AffiliateProductCard } from "@/components/shop/AffiliateProductCard";

const tools = [
  {
    name: "Unreal Engine 5",
    description: "Our primary game engine for building stunning environments and gameplay mechanics",
    logo: "/images/unreal-engine-logo.svg",
    link: "https://www.unrealengine.com/",
    category: "Game Engine"
  },
  {
    name: "Blender",
    description: "3D modeling and animation software for creating characters and assets",
    logo: "https://download.blender.org/branding/blender_logo_socket.png",
    link: "https://www.blender.org/",
    category: "3D Modeling"
  },
  {
    name: "Photoshop",
    description: "Professional image editing for textures, concept art, and marketing materials",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    link: "https://www.adobe.com/products/photoshop.html",
    category: "Design"
  },
  {
    name: "Substance Painter",
    description: "3D painting software for creating realistic textures and materials",
    logo: "https://cdn.worldvectorlogo.com/logos/substance-painter.svg",
    link: "https://www.adobe.com/products/substance3d-painter.html",
    category: "Texturing"
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaboration platform for our development workflow",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/",
    category: "Development"
  },
  {
    name: "Audacity",
    description: "Open-source audio editing software for sound design and music production",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Audacity_Logo.svg",
    link: "https://www.audacityteam.org/",
    category: "Audio"
  }
];

const affiliateProducts = [
  {
    name: "MSI Optix MAG342CQR 34\" Gaming Monitor",
    description: "1500R Curvature 21:9 Ultra-Wide Monitor with 144Hz Refresh Rate - Perfect for detailed game development work",
    link: "https://amzn.to/42OyVpW",
    price: "$219.99",
    image: "https://m.media-amazon.com/images/I/71EGJf9cUcL._AC_SL1500_.jpg",
    category: "Monitor"
  },
  {
    name: "INNOCN 49\" Curved Gaming Monitor",
    description: "144Hz Ultrawide 32:9 Display with HDR400 - Incredible screen real estate for multitasking",
    link: "https://amzn.to/47mvF6E",
    price: "$549.98",
    image: "https://m.media-amazon.com/images/I/71OhD9KjGrL._AC_SL1500_.jpg",
    category: "Monitor"
  },
  {
    name: "MSI Codex Z2 Gaming Desktop",
    description: "AMD R7-8700F, RTX 5070, 32GB DDR5 - Our main development workstation for Unreal Engine 5",
    link: "https://amzn.to/4qpjJJW",
    price: "$1,699.99",
    image: "https://m.media-amazon.com/images/I/61P+fGjGLiL._AC_SL1500_.jpg",
    category: "Desktop"
  },
  {
    name: "MSI Gaming RTX 5070 Graphics Card",
    description: "12GB GDDR7 - Essential for rendering high-quality game graphics and real-time previews",
    link: "https://amzn.to/4hm44XA",
    price: "$549.99",
    image: "https://m.media-amazon.com/images/I/71pdLSkA4NL._AC_SL1500_.jpg",
    category: "GPU"
  },
  {
    name: "MSI Katana 15 HX Gaming Laptop",
    description: "Intel Core i9-14900HX, RTX 5070, 32GB DDR5 - Portable powerhouse for development on the go",
    link: "https://amzn.to/3WVxRwM",
    price: "$1,661.88",
    image: "https://m.media-amazon.com/images/I/71Y4L0zr+1L._AC_SL1500_.jpg",
    category: "Laptop"
  }
];

const Shop = () => {
  return (
    <Layout>
      <SEO 
        title="Shop — Game Development Tools" 
        description="Discover the tools and software we use to create Kip Caper and the Codex Caperis." 
      />
      
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-thief-gold to-emerald-glow bg-clip-text text-transparent">
            Behind the Heist
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            The tools and software we use to bring Kip Caper's world to life. From stunning visuals to immersive gameplay, here's what powers our development.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </section>

        {/* Affiliate Products Section */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl mb-3 bg-gradient-to-r from-emerald-glow to-thief-gold bg-clip-text text-transparent">
              Recommended Gear
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Support our development by checking out the equipment and products we use. 
              <span className="text-xs block mt-1 opacity-70">As Amazon Associates, we earn from qualifying purchases.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliateProducts.map((product) => (
              <AffiliateProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        <footer className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-lg border-white/10">
            <h2 className="font-display text-xl sm:text-2xl mb-3 text-thief-gold">
              Want to Create Games?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              Many of these tools have free versions or educational licenses. Start your game development journey today!
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Shop;
