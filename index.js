const tiposDeSites = [
    {
      titulo: "Website Institucional",
      descricao: "Apresenta informações sobre uma empresa, organização ou indivíduo. Geralmente contém páginas como 'Sobre Nós', 'Contato' e informações relevantes.",
      img: "https://www.ficaon.com/wp-content/uploads/2018/03/site-institucional.jpg",
      link: ""
    },
    {
      titulo: "Blog",
      descricao: "Uma plataforma para publicação de conteúdo regular, muitas vezes em formato de artigos. Pode incluir comentários e interação com os leitores.",
      img: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg",
      link: ""
    },
    {
      titulo: "Loja Virtual (e-Commerce)",
      descricao: "Permite a venda de produtos ou serviços online, com funcionalidades como carrinho de compras, pagamento online e gestão de pedidos.",
      img: "https://www.iset.com.br/blog/wp-content/uploads/2021/03/ecommerce-moda-como-criar-loja-virtual-nicho-1160x653-1.png",
      link: "url_do_website_3"
    },
    {
      titulo: "Portfólio Online",
      descricao: "Destinado a exibir trabalhos, projetos ou habilidades de profissionais criativos, como designers, fotógrafos e artistas.",
      img: "https://cdn.flipsnack.com/landing/files/stand-out-with-on-brand-digital-portfolios",
      link: "url_do_website_4"
    },
    {
      titulo: "Rede Social",
      descricao: "Plataforma que permite a interação e conexão entre usuários. Exemplos incluem Facebook, Instagram e LinkedIn.",
      img: "https://static.todamateria.com.br/upload/re/de/redessociaisinteracaopessoas-cke.jpg",
      link: "url_do_website_5"
    },
    {
      titulo: "Fórum Online",
      descricao: "Espaço para discussões sobre tópicos específicos. Os usuários podem postar perguntas, respostas e compartilhar informações.",
      img: "https://s3.amazonaws.com/wordpress-cdn.eadbox.com/2018/09/10100323/f%C3%B3rum-de-discuss%C3%B5es.png",
      link: "url_do_website_6"
    },
    {
      titulo: "Site de Notícias ou Blog de Conteúdo",
      descricao: "Focado na divulgação de notícias, artigos ou conteúdo informativo sobre uma variedade de tópicos.",
      img: "https://mobister.com.br/app/uploads/2022/11/site-portais-conteudo-hero.png",
      link: "url_do_website_7"
    },
    {
      titulo: "Sistema de Gerenciamento de Conteúdo (CMS)",
      descricao: "Plataformas como WordPress, Joomla ou Drupal que permitem a criação e gestão fácil de conteúdo online.",
      img: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/12/O-Que-e-CMS-Sistema-de-Gerenciamento-de-Conte%C3%BAdo.png",
      link: "url_do_website_8"
    },
    {
      titulo: "Sistema de Reservas ou Agendamento",
      descricao: "Utilizado por empresas que oferecem serviços agendados, como hotéis, salões de beleza ou consultórios médicos.",
      img: "https://images.ctfassets.net/63bmaubptoky/kg8ly2L7Jxv7eobKb4tQw4PdQMEbHyIKisdeaqNB5FA/f3cede141608984a1782796d133bfb4f/setmore-BR-Capterra-Image-2.png",
      link: "url_do_website_9"
    },
    {
      titulo: "Plataforma de Ensino Online (E-learning)",
      descricao: "Ambiente virtual para cursos, treinamentos e educação a distância.",
      img: "https://www.ispringpro.com.br/blog/wp-content/uploads/editor/2021/04/ispring-blog-image-1619521148.png",
      link: "url_do_website_10"
    },
    {
      titulo: "Sistema de Gestão Empresarial (ERP)",
      descricao: "Auxilia na gestão interna de uma empresa, integrando processos como finanças, recursos humanos e estoque.",
      img: "https://www.balcaoautomotivo.com/wp-content/uploads/2023/10/Design-sem-nome-2023-10-30T164058.268.png",
      link: "url_do_website_11"
    },
    {
      titulo: "Sistema de Gerenciamento de Relacionamento com o Cliente (CRM)",
      descricao: "Organiza e facilita o relacionamento com clientes, incluindo dados, comunicações e histórico de interações.",
      img: "https://fleeg.com/wp-content/uploads/o-que-e-crm.png",
      link: "url_do_website_12"
    },
    {
      titulo: "Intranet",
      descricao: "Plataforma privada utilizada internamente por uma organização para compartilhamento de informações e colaboração entre funcionários.",
      img: "https://www.sults.com.br/pages/com/solucoes/franquias/intranet-para-franquias/img/jpg/dashboard-sults.jpg",
      link: "url_do_website_13"
    },
    {
      titulo: "Plataforma de Crowdfunding",
      descricao: "Facilita a arrecadação de fundos para projetos por meio de contribuições de muitas pessoas.",
      img: "https://www.trplane.com/wp-content/uploads/2024/02/crowdfunding.jpg",
      link: "url_do_website_14"
    },
    {
      titulo: "Sistema de Resposta a Incidentes (Help Desk)",
      descricao: "Oferece suporte ao cliente, registrando e acompanhando incidentes ou problemas relatados.",
      img: "https://www.manageengine.com/products/service-desk/it-incident-management/images/incident-response.png",
      link: "url_do_website_15"
    }
];
  

const containerProjetos = document.getElementById('containerProjetos')


tiposDeSites.forEach(e => {
    containerProjetos.innerHTML += `
    <div class="hover:scale-110 duration-200 hover:bg-white hover:shadow-2xl" > 
      <img src="${e.img}" alt="" class="w-full object-cover duration-200  aspect-square ">
      <div class="px-4 py-2">
        <h2 class="text-lg font-medium">${e.titulo}</h2>
        <p >${e.descricao}</p>
      </div>

    </div>`
})