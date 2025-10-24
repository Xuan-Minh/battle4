import Header from "../components/Header";
import FormExample from "../components/FormExample";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ padding: 20 }}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Bienvenue — App Router
        </motion.h1>

        <p>
          Exemples d'utilisation : framer-motion, react-hook-form,
          @sanity/client, next-intl
        </p>

        <section style={{ marginTop: 20 }}>
          <FormExample />
        </section>
      </main>
    </>
  );
}
