import { Avatar, Layout } from "antd";
import Logo from "../../assets/rj.jfif";
import { Link, useNavigate } from "react-router-dom";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { FaLinkedinIn } from "react-icons/fa";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Sider width={300} className="hidden lg:block">
      <div className="text-white flex flex-col items-center justify-between py-8 h-full font-sans">
        <div className="flex flex-col gap-3 items-center">
          <Avatar
            src={Logo}
            size={128}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h2 className="font-semibold text-base">ALESSANDRO MATE JR</h2>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-3 font-semibold text-lg cursor-pointer">
          <p
            className="hover:text-red-300"
            onClick={() => navigate("/timeline")}
          >
            TIMELINE
          </p>
          <Link
            to="https://www.tiktok.com/@careershifterrj?is_from_webapp=1&sender_device=pc"
            className="hover:text-red-300"
            target="_blank"
          >
            VIDEOS
          </Link>
          <a
            className="hover:text-red-300"
            href="/resume/mate-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
          <p
            className="hover:text-red-300"
            onClick={() => window.open("mailto:rjimaw7777@gmail.com")}
          >
            CONTACT
          </p>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <div className="flex items-center gap-4 cursor-pointer">
            <GithubOutlined
              style={{ fontSize: "18px" }}
              onClick={() =>
                window.open("https://github.com/rjimaw7", "_blank")
              }
            />
            <FaLinkedinIn
              style={{ fontSize: "18px" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/alessandro-mate-jr-15b369168/",
                  "_blank"
                )
              }
            />
            <MailOutlined
              style={{ fontSize: "18px" }}
              onClick={() => window.open("mailto:rjimaw7777@gmail.com")}
            />
          </div>
          <p className="text-md">Copyright @{new Date().getFullYear()} </p>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
