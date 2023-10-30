import { Col, Row, Typography } from "antd";
import Hero from "../../assets/hero1.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  FilePdfOutlined,
  FundProjectionScreenOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen overflow-hidden overflow-y-auto bg-white">
      {/* LOGO AND HERO HERE */}
      <section className="relative h-[calc(100vh-64vh)] overflow-hidden">
        <img src={Hero} alt="hero" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white">
          <div className="text-center flex flex-col items-center gap-1">
            <p className="text-md md:text-lg font-sans font-semibold">
              Alessandro Mate Jr.
            </p>
            <h1 className="text-2xl md:text-4xl font-bold">
              FRONT-END DEVELOPER
            </h1>
            <p className="text-md md:text-lg italic">
              Crafting everyday progress, not chasing perfection.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN TEXT */}
      <section className="mt-4 md:mt-8 lg:mt-16 p-5 flex gap-4 items-start md:mx-10 lg:mx-20">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={24} lg={6}>
            <div className="flex flex-col items-start justify-center gap-1 h-full">
              <h6 className="text-xs text-gray-500 tracking-wider font-sans">
                HOW EVERYTHING BEGAN
              </h6>
              <h2 className="text-2xl font-semibold font-sans">
                My Story and How it All Played Out
              </h2>
            </div>
          </Col>
          <Col xs={24} md={24} lg={18}>
            <div>
              <Paragraph className="text-base font-sans">
                My journey from being a dedicated gamer to becoming a Senior
                Front End Developer was quite a transformation. I started by
                studying Information Technology in college (BSIT), but I had a
                hard time getting a job because I didn't take my studies
                seriously and played games a lot.
              </Paragraph>
              <Paragraph className="text-base font-sans">
                After a year of trying and failing at job interviews, I finally
                got a job in IT helpdesk support. But I soon realized that I was
                bored with the repetitive work and wanted to be a web developer.
                So, I started learning web development by watching YouTube
                videos.
              </Paragraph>
              <Paragraph className="text-base font-sans">
                To focus on getting a developer job, I quit my IT helpdesk job
                and built my portfolio website{" "}
                <Link
                  to="https://rjmate.xyz"
                  className="text-blue-100 !underline cursor-pointer"
                  target="_blank"
                >
                  rjmate.xyz
                </Link>
                . It took four months, many job applications, and failed
                interviews, but I eventually got hired as a Junior Front End
                Developer.
              </Paragraph>
              <Paragraph className="text-base font-sans">
                As time passed, I kept improving my skills and gained more
                experience. A year later, I was promoted to a Senior Front End
                Developer. This journey from being a gamer with a casual
                approach to studies to becoming a Senior Front End Developer
                shows the importance of determination, constant learning, and
                following your passion.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={24} lg={6}>
            <div className="flex flex-col items-start justify-center gap-1 h-full md:mt-6">
              <h6 className="text-xs text-gray-500 tracking-wider font-sans">
                OFFERING A VARIETY OF SERVICES
              </h6>
              <h2 className="text-2xl font-semibold font-sans">
                Improving the web since 2022
              </h2>
            </div>
          </Col>
          <Col xs={24} md={24} lg={18}>
            <div className="md:mt-6">
              <Paragraph className="text-base font-sans">
                I specialize in frontend technologies, particularly{" "}
                <span className="font-bold text-blue-500">HTML</span>,{" "}
                <span className="font-bold text-blue-500">CSS</span>, and{" "}
                <span className="font-bold text-blue-500">JavaScript</span>, and
                I have a strong grasp of{" "}
                <span className="font-bold text-blue-500">ReactJS</span>.
              </Paragraph>
              <Paragraph className="text-base font-sans">
                In my one year of experience as a front-end developer, my daily
                tasks included converting designs from{" "}
                <span className="font-bold text-blue-500">Figma</span> into
                interactive React components. The API routes were already
                created by the backend team, and I integrated them into the
                front end.
              </Paragraph>
              <Paragraph className="text-base font-sans">
                Take a look at the{" "}
                <span
                  className="font-bold text-blue-500 cursor-pointer hover:underline"
                  onClick={() => navigate("/timeline")}
                >
                  Timeline
                </span>{" "}
                to get an overview of my journey and achievements to date.
              </Paragraph>
            </div>
          </Col>

          {/* OFFER */}
          <Col xs={24} md={8} className="md:mt-6 lg:mt-12">
            <div className="flex flex-col items-center gap-1">
              <FundProjectionScreenOutlined className="text-4xl" />
              <h2 className="font-semibold text-lg">Web development</h2>
              <p className="text-gray-500 text-md text-center">
                HTML, CSS, Javascript and ReactJS. Ant Design for UI library and
                Zustand for State Management
              </p>
            </div>
          </Col>
          <Col xs={24} md={8} className="md:mt-6 lg:mt-12">
            <div className="flex flex-col items-center gap-1">
              <MobileOutlined className="text-4xl" />
              <h2 className="font-semibold text-lg">Responsive Design</h2>
              <p className="text-gray-500 text-md text-center">
                In this day and age, having a mobile-responsive website is
                crucial in {new Date().getFullYear()}. I'm here to make it
                happen for you!
              </p>
            </div>
          </Col>
          <Col xs={24} md={8} className="md:mt-6 lg:mt-12">
            <div className="flex flex-col items-center gap-1">
              <FilePdfOutlined className="text-4xl" />
              <h2 className="font-semibold text-lg">PSD to HTML</h2>
              <p className="text-gray-500 text-md text-center">
                Got a great design in Photoshop, Figma, or even Sketch?{" "}
                <span
                  className="text-blue-500 font-semibold cursor-pointer"
                  onClick={() => window.open("mailto:rjimaw7777@gmail.com")}
                >
                  Contact
                </span>{" "}
                me, and I'll turn them into attractive, fully responsive
                websites!
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Home;
