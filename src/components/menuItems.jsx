import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';

const menuItems = [
  { name: "Home", link: "/", icon: <HomeOutlinedIcon /> },
  {
    name: "Frater",
    link: "/frater",
    icon: <EngineeringOutlinedIcon />,
    sublinks: [
      { name: 'Caju Limão', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/174872/financeiro/cobrancas' },
      { name: 'QI 05 Casa 10', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/188714/financeiro/cobrancas' },
      { name: 'Bar Superquadra', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/198694/financeiro/cobrancas' },
      { name: 'QI 11 - Rafael', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/170234/financeiro/cobrancas' },
      { name: 'Hênio', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132277/financeiro/cobrancas' },
      { name: 'Tiffany', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/185454/financeiro/cobrancas' },
      { name: '402 Norte', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/147823/financeiro/cobrancas' },
      { name: 'Darson', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132283/financeiro/cobrancas' },
      { name: 'Maia', link: '' },
      { name: 'Ed Carlton', link : ''},
      { name: 'The Coffee', link : 'https://plataforma.vobi.com.br/profissional/projetos/perfil/211241/financeiro/cobrancas'},
      { name: 'Família Barros', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/188332/financeiro/cobrancas'},
      { name: 'Thibaus', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132290/financeiro/cobrancas' },
      { name: 'Pingret', link: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/162162/financeiro/cobrancas' }
    ]
  },
  {
    name: "Butler",
    link: "/butler",
    icon: <CodeOffOutlinedIcon />,
    sublinks: [
      { name: 'Reference', link: '/butler/reference' }
    ]
  },
  { name: "Faculdade", link: "/faculdade", icon: <SchoolOutlinedIcon /> },
  { name: "Família", link: "/familia", icon: <FamilyRestroomOutlinedIcon /> },
  { name: "Amigos", link: "/amigos", icon: <Diversity3OutlinedIcon /> },
  { name: "Expansão", link: "/projetos", icon: <PublicOutlinedIcon /> },
  { name: "Jogos", link: "/jogos", icon: <SportsEsportsOutlinedIcon /> },
  { name: "Contas", link: "/contas", icon: <AttachMoneyOutlinedIcon /> },
  { name: "Sonhos", link: "/sonhos", icon: <BedtimeOutlinedIcon /> }
];

export default menuItems;
