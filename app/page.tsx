"use client";
import {useEffect} from "react";

const programs = [
  {n:"01",title:"Inglês",text:"Comunicação, confiança e evolução contínua, com encontros de 60 minutos e material próprio.",tag:"Por nível e objetivo",icon:"A"},
  {n:"02",title:"Acompanhamento escolar",text:"Apoio em tarefas, provas e estratégias de estudo para construir autonomia — sem criar dependência.",tag:"Organização e rotina",icon:"✓"},
  {n:"03",title:"Psicopedagogia",text:"Escuta cuidadosa, plano individual e orientação à família para compreender como a criança aprende.",tag:"Olhar especializado",icon:"◎"},
  {n:"04",title:"Combos HSL",text:"Inglês e acompanhamento escolar em uma agenda integrada, com economia e uma rotina mais leve.",tag:"Duas frentes, um cuidado",icon:"+"},
];

export default function Home(){
  useEffect(()=>{const els=document.querySelectorAll("[data-reveal]"); const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("shown");io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[]);
  return <main>
    <header className="nav"><a className="brand" href="#inicio"><span className="brandmark">H</span><span>Home Sweet Learning<small>Águas Claras</small></span></a><nav aria-label="Navegação principal"><a href="#programas">Programas</a><a href="#metodo">Como funciona</a><a href="#planos">Planos</a></nav><a className="button small" href="#contato">Agendar conversa</a></header>

    <section id="inicio" className="hero">
      <div className="dots d1"/><div className="hero-copy" data-reveal>
        <h1>Seu filho não precisa estudar mais.<br/><em>Precisa encontrar o jeito certo de aprender.</em></h1>
        <div className="actions"><a className="button" href="#contato">Quero conhecer a HSL <span>↗</span></a><a className="text-link" href="#programas">Explorar programas ↓</a></div>
        <div className="trust"><span><b>Atendimento individual</b><small>por padrão</small></span><span><b>Plano personalizado</b><small>para cada fase</small></span><span><b>Comunicação próxima</b><small>com a família</small></span></div>
      </div>
      <div className="hero-art hero-logo"><img src="/logo-hsl.png" alt="Home Sweet Learning"/></div>
      <div className="wave"/>
    </section>

    <section className="intro section" data-reveal><span className="kicker">UM NOVO JEITO DE ACOMPANHAR</span><div className="split"><h2>Mais que aulas.<br/><em>Um caminho acompanhado.</em></h2><div><p className="lead">Na HSL, cada encontro faz parte de um programa com intenção: entendemos o momento da criança, organizamos o percurso e acompanhamos sua evolução.</p><p>Sem fórmulas prontas e sem aulas desconectadas. O vínculo, o material próprio e a conversa com a família transformam o aprendizado em uma experiência mais leve.</p></div></div></section>

    <section id="programas" className="programs section"><div className="section-head" data-reveal><div><span className="kicker">PROGRAMAS HSL</span><h2>O cuidado certo para<br/><em>cada necessidade.</em></h2></div><p>Serviços que funcionam de forma independente — ou juntos, em uma rotina integrada.</p></div><div className="program-grid">{programs.map((p,i)=><article className={`program p${i+1}`} key={p.title} data-reveal><div className="program-top"><span>{p.n}</span><b>{p.icon}</b></div><h3>{p.title}</h3><p>{p.text}</p><small>{p.tag}</small></article>)}</div></section>

    <section id="metodo" className="method"><div className="method-art" data-reveal><div className="note"><span>cada criança</span><b>aprende de<br/>um jeito.</b></div><div className="scribble">✦</div></div><div className="method-copy" data-reveal><span className="kicker light">EXPERIÊNCIA HSL</span><h2>Personalização<br/><em>sem improviso.</em></h2><ol><li><span>01</span><div><b>Escutamos</b><p>Conhecemos a criança, a família e o momento escolar.</p></div></li><li><span>02</span><div><b>Planejamos</b><p>Definimos objetivos e uma rotina compatível com as necessidades reais.</p></div></li><li><span>03</span><div><b>Acompanhamos</b><p>Observamos a evolução e ajustamos o percurso com clareza.</p></div></li></ol></div></section>

    <section className="benefits section"><div data-reveal><span className="kicker">POR QUE A HSL?</span><h2>Pequena no formato.<br/><em>Grande no cuidado.</em></h2></div><div className="benefit-list">{[["01","Atenção de verdade","Atendimento individual como padrão, respeitando ritmo e objetivos."],["02","Autonomia em construção","Apoio para a criança avançar com mais confiança, não depender do reforço."],["03","Família por perto","Comunicação humana, regras claras e acompanhamento contínuo."],["04","Rotina que cabe na vida","Horário reservado no ciclo e opções integradas para simplificar a semana."]].map(x=><article key={x[0]} data-reveal><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></section>

    <section id="planos" className="plans section"><div className="section-head" data-reveal><div><span className="kicker">INVESTIMENTO</span><h2>Escolha o ritmo.<br/><em>Nós cuidamos do caminho.</em></h2></div><p>Ciclos trimestrais reservam vaga e horário. Também há opções mensais flexíveis, conforme disponibilidade.</p></div><div className="price-grid">
      <article data-reveal><span className="pill">INGLÊS</span><h3>Confiança para se comunicar</h3><p>1x por semana</p><strong>3x <b>R$ 459</b></strong><p>2x por semana</p><strong>3x <b>R$ 819</b></strong></article>
      <article data-reveal><span className="pill">ACOMPANHAMENTO</span><h3>Mais organização, menos sufoco</h3><p>1x por semana</p><strong>3x <b>R$ 509</b></strong><p>2x por semana</p><strong>3x <b>R$ 919</b></strong></article>
      <article className="featured" data-reveal><span className="pill">PSICOPEDAGOGIA</span><h3>Compreender para desenvolver</h3><p>Pacote de 10 sessões</p><strong>3x <b>R$ 700</b></strong><p>Sessão flexível</p><strong><b>R$ 240</b></strong></article>
    </div><p className="fine">Valores do ciclo trimestral. Matrícula única de R$ 150 na primeira contratação. Material didático pode ser cobrado separadamente.</p></section>

    <section className="founding"><div data-reveal><span className="kicker light">LANÇAMENTO · 10 VAGAS</span><h2>Faça parte das<br/><em>Founding Families.</em></h2><p>As 10 primeiras famílias da HSL Águas Claras recebem isenção da matrícula no primeiro ciclo. Na Psicopedagogia, a triagem inicial também é gratuita na contratação do primeiro pacote.</p><a className="button orange" href="#contato">Quero saber se ainda há vagas ↗</a><small>Benefício limitado, pessoal e não cumulativo. Mensalidade paga normalmente desde o primeiro mês.</small></div><div className="big-ten" aria-hidden="true">10<span>famílias</span></div></section>

    <section className="faq section"><div data-reveal><span className="kicker">DÚVIDAS FREQUENTES</span><h2>Antes de começar,<br/><em>vale saber.</em></h2></div><div className="faq-list">{[["Como é o primeiro contato?","Conversamos sobre a necessidade da criança e orientamos o programa mais adequado antes da matrícula."],["Os atendimentos são em grupo?","O atendimento é individual por padrão. Duplas acontecem somente em casos pedagogicamente compatíveis, como irmãos gêmeos ou crianças da mesma escola, série e faixa etária."],["Qual a diferença do ciclo trimestral?","O ciclo reserva vaga e horário, protege o valor durante o período e dá acesso aos benefícios elegíveis. O mensal flexível depende da agenda."],["Existem combos?","Sim. Há três combinações de Inglês + Acompanhamento Escolar, com agenda integrada e economia em relação à contratação separada."]].map((x,i)=><details key={i} data-reveal><summary>{x[0]}<span>+</span></summary><p>{x[1]}</p></details>)}</div></section>

    <section id="contato" className="contact"><div className="contact-copy" data-reveal><span className="kicker light">VAMOS CONVERSAR?</span><h2>O próximo passo pode ser<br/><em>mais leve do que parece.</em></h2><p>Conte um pouco sobre a criança e o que vocês estão buscando. A HSL ajuda a encontrar o caminho mais adequado.</p><a className="button orange" href="mailto:homesweetlearningbr@gmail.com?subject=Quero conhecer a HSL Águas Claras">Agendar uma conversa ↗</a></div><div className="contact-card" data-reveal><span>HSL ÁGUAS CLARAS</span><h3>Aprender também<br/>pode ser acolhedor.</h3><a href="mailto:homesweetlearningbr@gmail.com">homesweetlearningbr@gmail.com</a><p>Atendimento presencial<br/>Águas Claras · Distrito Federal</p></div></section>
    <footer><a className="brand" href="#inicio"><span className="brandmark">H</span><span>Home Sweet Learning<small>Águas Claras</small></span></a><p>Inglês · Acompanhamento Escolar · Psicopedagogia</p><a href="#inicio">Voltar ao topo ↑</a></footer>
  </main>
}
