import { ClockCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { Col, Row, Timeline as AntTimeline, FloatButton } from "antd";
import { useNavigate } from "react-router-dom";

const Timeline = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-hidden overflow-y-auto bg-white">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="flex flex-col items-center text-center mt-12 gap-2">
            <h2 className="text-3xl font-semibold font-sans">
              MY JOURNEY TO SUCCESS!
            </h2>
          </div>
        </Col>
        <Col span={24}>
          <div className="mx-5 md:mx-20 mt-6">
            <AntTimeline
              mode="alternate"
              items={[
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>Augest 2023 - Present</p>
                      <p>
                        I am still actively involved in maintaining{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Agent Buboy
                        </span>{" "}
                        , and my comprehension of React has deepened
                        significantly. I'm eagerly looking forward to expanding
                        my knowledge even further.
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                  position: "left",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>July 2023</p>
                      <p>
                        I was promoted to the position of Senior Front End
                        Developer.
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "right",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>June 2023</p>
                      <p>
                        For the second time, I was entrusted with the role of
                        the sole frontend developer for another AI application
                        called{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Agent Buboy
                        </span>{" "}
                        This AI chat app generates prompts and is powered by
                        Chat GPT.
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "left",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>March 2023 - May 2023</p>
                      <p>
                        I had the chance to lead a frontend project, being the
                        sole frontend developer, for an AI app named{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Kurii
                        </span>
                        , designed for website scraping. During this time, I
                        applied my acquired knowledge and had the opportunity to
                        implement{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Zustand
                        </span>
                        , a minimalist state management solution, to enhance the
                        project
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "right",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>Jan 2023 - Feb 2023</p>
                      <p>
                        To gain a deeper understanding of my daily tasks, I was
                        assigned to various projects. During this period, my
                        current stack included{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          React
                        </span>
                        ,{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Tailwind CSS
                        </span>
                        ,{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Ant Design
                        </span>
                        , and for state management, both{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Redux
                        </span>{" "}
                        and{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Context API
                        </span>
                        . I also learned valuable React best practices, such as
                        using{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Custom Hooks
                        </span>{" "}
                        and maintaining{" "}
                        <span className="text-blue-500 font-semibold cursor-pointer">
                          Clean Code
                        </span>
                        .
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "left",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>August 2022 - December 2022</p>
                      <p>
                        As I settled into my new workplace, I soon realized that
                        YouTube tutorials didn't quite match the practical
                        challenges of real-world coding. To bridge this gap, I
                        committed myself to daily learning and leaned on my
                        colleagues for guidance to truly grasp React
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "right",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>July 2022</p>
                      <p>
                        After numerous trial-and-error experiences in developer
                        interviews, I finally secured a position as a junior
                        front-end developer at{" "}
                        <span
                          onClick={() =>
                            window.open("https://media-meter.com/", "_blank")
                          }
                          className="underline cursor-pointer"
                        >
                          Media Meter
                        </span>
                        .
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "left",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>April 2022 - June 2022</p>
                      <p>
                        I focused my studies on web development, primarily on
                        the frontend, and applied to numerous companies in quick
                        succession.
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "right",
                },
                {
                  children: (
                    <div className="w-full flex flex-col gap-1 text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>November 2018 - April 2022</p>
                      <p>
                        Gained 3 years working experience and improved my
                        communication skills in english .
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "left",
                },
                {
                  children: (
                    <div className="w-full gap-1 flex flex-col text-center p-5 font-sans rounded-md bg-blue-100 text-white">
                      <p>July 2017 - November 2018</p>
                      <p>
                        My career hunt led me to the IT helpdesk role in the BPO
                        industry.
                      </p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined />,
                  position: "right",
                },
                {
                  children: (
                    <div className="w-full flex flex-col text-center p-5 gap-1 font-sans rounded-md bg-blue-100 text-white">
                      <p>June 2017</p>
                      <p>I earned my degree in BSIT.</p>
                    </div>
                  ),
                  dot: <ClockCircleOutlined className="-mt-1" />,
                  position: "left",
                },
              ]}
            />
          </div>
        </Col>
        <Col span={24} className="my-6 mx-auto">
          <div className="flex items-center justify-center text-center">
            <p className="text-base text-gray-500">
              This page gets regular updates, and you're always welcome to
              return and track my ongoing progress!
            </p>
          </div>
        </Col>
        <FloatButton
          icon={<HomeOutlined />}
          className="cursor-pointer lg:hidden"
          onClick={() => navigate("/")}
        />
      </Row>
    </main>
  );
};

export default Timeline;
