import React from 'react';

export default function Meds({ setCurrentPath }) {
  return (
    <div className="container">
      <section className="section">
        <h1 className="big-title">药物信息</h1>
        <div className="content">
          <p>药物相关资料与说明页面建设中...</p>
          <p>
            查看完整的{' '}
            <a
              href="#hrt-overview"
              className="highlight"
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPath('hrt-overview');
              }}
            >
              HRT指南（综述）
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

