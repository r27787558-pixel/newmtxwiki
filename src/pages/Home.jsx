import React from 'react';

export default function Home({ setCurrentPath }) {
  return (
    <div className="container">
      <section className="section">
        <h1 className="big-title">你好喵</h1>
        <div className="content">
          <p>你好，欢迎来到mtx.wiki，这里是一个期待以后能够给mtx群体提供帮助的站点。</p>
          <p>
            MtX (Male-to-X)，男性向非二元跨性别者，是指出生时指派性别是男性，但自我认同不完全是女性、也不完全是男性的跨性别者。
          </p>
          <p>
            中性/非二元倾向跨性别者 (Transneutral/Transmasculine/Transfeminine non-binary) 则涵盖了更广泛的、脱离传统二元性别框架的非常规性别者。
          </p>
          <p>
            现在该站处于开始阶段(没任何人，也没任何资料)，希望有人可以帮助一同建立该站，有意者加Q
            <span className="highlight">2132248873</span>
          </p>
        </div>
      </section>

      <section className="section">
        <h1 className="big-title">我们的愿景</h1>
        <div className="content">
          <p>
            这里希望写一个适合各个mtx的
            <a
              href="#hrt-overview"
              className="highlight"
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPath('hrt-overview');
              }}
            >
              hrt指南
            </a>
            ，以及生活指南，其它打算给大家一个交友，娱乐的站点。
          </p>
        </div>
      </section>
    </div>
  );
}

