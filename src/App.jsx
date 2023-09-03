import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-main w-full overflow-hidden">
    <Navbar />
    <Hero />
    <Stats />
    <Business />
    <Billing />
    <CardDeal />
    <Testimonials />
    <Clients />
    <CTA />
    <Footer />
  </div>
);

export default App;
