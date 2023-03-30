import { motion } from "framer-motion";

export default function Aboutcontent() {
  return (
    <div className="aboutcontainer">
      <div className="aboutborder">
        <div className="aboutcontent">
          <motion.img
            src="https://lh3.googleusercontent.com/a/AGNmyxYwPR5jmsC9sJeBjpf9M3aNQICGQR1iwwWc010g=s432"
            alt=""
            initial={{ y: 20 }}
            animate={{ y: 0 , boxShadow: "0px 0px 0px 2px white"}}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 0.5 },
              yoyo: Infinity
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Vikash Khati
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            I am delighted to introduce Vikash Khati, a talented full stack
            developer with a passion for crafting exceptional user experiences.
            With his extensive knowledge of HTML, CSS, and JavaScript, Vikash
            designs stunning and intuitive front-end interfaces that leave a
            lasting impression on users. His proficiency in React.js and Next.js
            enables him to create dynamic and responsive web applications that
            are both powerful and efficient. Additionally, Vikash is
            well-versed in backend development, using Node.js and MongoDB to
            build scalable and reliable systems that ensure seamless
            performance. His commitment to staying up-to-date with the latest
            technologies and his attention to detail make him an invaluable
            asset to any project. Vikash's work ethic and dedication to his craft
            are truly impressive, and I have no doubt that he will continue to
            make significant contributions to the field of full stack
            development.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
