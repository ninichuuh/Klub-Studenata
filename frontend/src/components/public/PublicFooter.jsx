import React from "react";

const PublicFooter = () => {
  return (
    <footer id="footer" className="bg-zinc-800 hover:bg-zinc-600 text-white">
      <section className="mx-auto flex flex-col text-center justify-evenly  ">
        <address>
          <h2>Klub Studenata Istre Mate Balote</h2>
          Ilica 13, Zagreb, Hrvatska
          <br />
          Email:
          <a href="mailto:info@ksimb.hr">info@ksimb.hr</a>
          <br />
          Telefon: <a href="tel:+385 5555555">(555) 555-5555</a>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="#sections" className="hover:opacity-90">
            Naše Sekcije
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" className="hover:opacity-90">
            Konkatkirajte Nas
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-center">
            Copyright &copy; <span id="year">2022</span> <br />
            <a href="/privacy" className="hover:opacity-90">
              Politika Privatnosti
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default PublicFooter;
