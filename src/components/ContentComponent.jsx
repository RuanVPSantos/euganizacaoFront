import Typography from '@mui/material/Typography';

const ContentComponent = () => {
  const content = [
    {
      title: 'Frater',
      links: [
        { text: 'Caju Limão', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/174872/financeiro/cobrancas' },
        { text: 'QI 05 Casa 10', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/188714/financeiro/cobrancas' },
        { text: 'Bar Superquadra', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/198694/financeiro/cobrancas' },
        { text: 'QI 11 - Rafael', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/170234/financeiro/cobrancas' },
        { text: 'Hênio', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132277/financeiro/cobrancas' },
        { text: 'Tiffany', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/185454/financeiro/cobrancas' },
        { text: '402 Norte', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/147823/financeiro/cobrancas' },
        { text: 'Darson', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132283/financeiro/cobrancas' },
        { text: 'Maia', href: '' },
        { text: 'Thibaus', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132290/financeiro/cobrancas' },
        { text: 'Pingret', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/162162/financeiro/cobrancas' },
      ]
    },
    {
      title: 'Faculdade',
      links: [
        { text: 'Arquitetura e Organização de computadores', href: '' },
        { text: 'Redes e Sistemas Distribuídos', href: '' },
        { text: 'Projeto de Software', href: '' },
        { text: 'Sociedade Brasileira e Cidadania', href: '' },
        { text: 'Segurança e Auditoria de Sistemas', href: '' },
        { text: 'Segurança e Auditoria de Sistemas', href: '' },
        { text: 'Desenvolvimento de Jogos', href: '' }
      ]
    }
  ];

  return (
    <ul>
      {content.map((item, index) => (
        <li key={index}>
          <Typography variant="h6">{item.title}</Typography>
          <ul>
            {item.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Typography>{link.text}</Typography>
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ContentComponent;
