import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, CalendarCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function MediatorSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 font-sans p-6">
      <header className="max-w-5xl mx-auto py-12 text-center">
        <motion.img
          src="/logo-medijacija.png"
          alt="Logo medijacije"
          className="mx-auto w-24 h-24 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mirno Rešenje Svakog Sukoba
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Profesionalne usluge medijacije – brzo, poverljivo i efikasno
        </motion.p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">O meni</h2>
              <img
                src="/medijator-marija.jpg"
                alt="Medijator Marija Petrović"
                className="w-full rounded-xl mb-4"
              />
              <p className="text-gray-700">
                Zovem se Marija Petrović, sertifikovani medijator sa više od 10 godina iskustva u rešavanju poslovnih, porodičnih i imovinskih sporova. Moja misija je da pomognem stranama da dođu do sporazuma koji zadovoljava obe strane – brzo, mirno i trajno.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6 rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Usluge</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Medijacija u privrednim sporovima</li>
                <li>Porodična medijacija</li>
                <li>Imovinsko-pravni sporovi</li>
                <li>Konsultacije i priprema za medijaciju</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Kontakt</h2>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5" />
                <span>kontakt@medijator.rs</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5" />
                <span>+381 64 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5" />
                <span>Kralja Petra 12, Beograd</span>
              </div>
              <a href="https://calendly.com/medijator-zakazivanje" target="_blank" rel="noopener noreferrer">
                <Button className="w-full mt-4" size="lg">
                  <CalendarCheck className="mr-2 w-4 h-4" /> Zakazivanje
                </Button>
              </a>
              <div className="flex gap-4 pt-4 text-blue-600 justify-center">
                <a href="https://www.instagram.com/medijator.marija" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
                </a>
                <a href="https://www.facebook.com/medijator.marija" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="w-6 h-6 hover:text-blue-700 transition" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Marija Petrović | Medijator | Sva prava zadržana
      </footer>
    </div>
  );
}
