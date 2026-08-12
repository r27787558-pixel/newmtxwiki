export default function Footer({ setCurrentPath }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-disclaimer">
          <strong>医学免责声明：</strong>
          本站内容仅供参考，不构成医疗建议。任何用药或治疗决策请务必咨询合格的医生。
          <a
            href="#/disclaimer"
            className="highlight"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('disclaimer');
            }}
          >
            阅读完整声明
          </a>
        </p>
        <p className="footer-meta">
          © {new Date().getFullYear()} MtX.wiki ·
          <a
            href="#/help"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('help');
            }}
          >
            紧急救助
          </a>
        </p>
      </div>
    </footer>
  );
}
