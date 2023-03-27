import { IconType } from "react-icons";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdLiveTv, MdLocalFireDepartment } from "react-icons/md";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";

interface CategoryType {
  name: string;
  Icon: IconType;
  type: string;
  divider?: boolean;
}
export const categories: CategoryType[] = [
  { name: "New", Icon: AiFillHome, type: "home" },
  { name: "Trending", Icon: MdLocalFireDepartment, type: "category" },
  { name: "Music", Icon: CgMusicNote, type: "category" },
  { name: "Films", Icon: FiFilm, type: "category" },
  { name: "Live", Icon: MdLiveTv, type: "category" },
  { name: "Gaming", Icon: IoGameControllerSharp, type: "category" },
  { name: "News", Icon: ImNewspaper, type: "category" },
  { name: "Sports", Icon: GiDiamondTrophy, type: "category" },
  { name: "Learning", Icon: RiLightbulbLine, type: "category" },
  {
    name: "Fashion & beauty",
    Icon: GiEclipse,
    type: "category",
    divider: true,
  },
  { name: "Settings", Icon: FiSettings, type: "menu" },
  { name: "Report History", Icon: AiOutlineFlag, type: "menu" },
  { name: "Help", Icon: FiHelpCircle, type: "menu" },
  { name: "Send feedback", Icon: RiFeedbackLine, type: "menu" },
];
