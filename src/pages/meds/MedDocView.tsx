import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { MedBlock, MedDoc, MedRow } from './meddoc';

function RowTable({ rows }: { rows: MedRow[] }) {
  return (
    <table className="med-effect-table">
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th>{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Block({ block }: { block: MedBlock }) {
  return (
    <>
      <h3>{block.heading}</h3>
      {block.note ? <p>{block.note}</p> : null}
      {block.quote ? (
        <blockquote className="info-quote">
          <strong>{block.quote}</strong>
        </blockquote>
      ) : null}
      {block.rows ? <RowTable rows={block.rows} /> : null}
      {block.cards
        ? block.cards.map((card) => (
            <div key={card.title} className="route-block">
              <h4>
                {card.title}
                {card.level ? ` · ${card.level}` : ''}
              </h4>
              <RowTable rows={card.rows} />
            </div>
          ))
        : null}
    </>
  );
}

/**
 * 把一份 MedDoc 渲染成页面主体。
 *
 * 医学提示与来源块对所有药物页保持一致：提示放在最前（读者在做任何操作之前会先看到），
 * 来源放在最后（需要追溯时才看）。这样每页都不必重复这两段文案。
 */
export default function MedDocView({ doc }: { doc: MedDoc }) {
  const { t } = useLanguage();

  return (
    <div className="content">
      <p className="med-notice">
        {t.medNotice}{' '}
        <a href="#/disclaimer">{t.medNoticeLink}</a>
      </p>

      <h2>{doc.title}</h2>
      <p>{doc.lead}</p>

      {doc.hasDoses ? <p className="med-dose-note">{t.medDoseNote}</p> : null}

      {doc.blocks.map((block) => (
        <Block key={block.heading} block={block} />
      ))}

      {doc.sources.length > 0 ? (
        <div className="med-sources">
          <h3>{t.medSources}</h3>
          <ul>
            {doc.sources.map((source) => (
              <li key={source.label}>
                {source.url ? (
                  <a href={source.url} target="_blank" rel="noreferrer noopener">
                    {source.label}
                  </a>
                ) : (
                  source.label
                )}
              </li>
            ))}
          </ul>
          <p className="med-guideline-note">{t.medGuidelineNote}</p>
        </div>
      ) : null}
    </div>
  );
}
