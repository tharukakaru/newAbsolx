import { useCallback, useEffect, useId, useRef } from "react";

function MeghaValue({ megha, value }) {
  if (!megha) {
    return value;
  }

  return "MEGHA";
}

export default function MeghaAircraftContent({
  titleId,
  name,
  typeLabel,
  year,
  image,
  imageAlt,
  specs,
  tags,
  descriptionParagraphs,
  descriptionLabel,
  footerParagraphs,
  footerLabel,
  specsClassName,
  imageClassName,
  stageClassName,
}) {
  const contentRef = useRef(null);
  const specsRef = useRef(null);
  const descRef = useRef(null);
  const stageRef = useRef(null);
  const footerTitleId = useId();

  const updateDescLineHeight = useCallback(() => {
    const content = contentRef.current;
    const specs = specsRef.current;
    const desc = descRef.current;

    if (!content || !specs || !desc) {
      return;
    }

    const specsBottom = specs.getBoundingClientRect().bottom;
    const descTop = desc.getBoundingClientRect().top;
    const lineHeight = specsBottom - descTop;

    if (lineHeight > 0) {
      content.style.setProperty(
        "--megha-aircraft-desc-line-height",
        `${lineHeight}px`,
      );
    }
  }, []);

  useEffect(() => {
    updateDescLineHeight();

    const resizeObserver = new ResizeObserver(updateDescLineHeight);
    const observed = [specsRef.current, descRef.current, stageRef.current].filter(
      Boolean,
    );

    observed.forEach((node) => resizeObserver.observe(node));
    window.addEventListener("resize", updateDescLineHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDescLineHeight);
    };
  }, [specs, updateDescLineHeight]);

  const hasFooter = footerParagraphs?.length > 0;

  return (
    <div className="megha-aircraft-section">
      <div
        ref={contentRef}
        className="megha-aircraft-content x-striker-section__content"
      >
        <div className="x-striker-profile">
          <div
            ref={stageRef}
            className={`x-striker-aircraft-stage${stageClassName ? ` ${stageClassName}` : ""}`}
          >
            <h2
              id={titleId}
              className="x-striker-aircraft-stage__name"
            >
              <span>{name}</span>
              {typeLabel ? (
                <span className="x-striker-aircraft-stage__type">{typeLabel}</span>
              ) : null}
            </h2>

            {year ? (
              <span className="x-striker-aircraft-stage__year">{year}</span>
            ) : null}

            <figure className="x-striker-aircraft-stage__figure">
              <img
                className={`x-striker-aircraft-stage__image${imageClassName ? ` ${imageClassName}` : ""}`}
                src={image}
                alt={imageAlt}
                draggable="false"
                onLoad={updateDescLineHeight}
              />
            </figure>
          </div>

          <dl
            ref={specsRef}
            className={`x-striker-specs megha-aircraft-content__specs${specsClassName ? ` ${specsClassName}` : ""}`}
          >
            {specs.map((row, index) => {
              if (row.kind === "spacer") {
                return (
                  <div
                    className="x-striker-specs__row x-striker-specs__row--spacer"
                    key={`spacer-${index}`}
                    aria-hidden="true"
                  />
                );
              }

              if (row.kind === "header") {
                return (
                  <div
                    className="x-striker-specs__row x-striker-specs__row--header"
                    key={`header-${index}`}
                  >
                    <dd className="x-striker-specs__value x-striker-specs__value--megha">
                      <MeghaValue megha={row.megha} value={row.value} />
                    </dd>
                  </div>
                );
              }

              if (row.kind === "split") {
                return (
                  <div
                    className="x-striker-specs__row x-striker-specs__row--split"
                    key={row.cells[0].label}
                  >
                    {row.cells.map((cell) => (
                      <div className="x-striker-specs__cell" key={cell.label}>
                        <dt className="x-striker-specs__label">{cell.label}</dt>
                        <dd className="x-striker-specs__value">{cell.value}</dd>
                      </div>
                    ))}
                  </div>
                );
              }

              const rowKey = row.label || row.value || index;
              const rowClassName = row.valueOnly
                ? "x-striker-specs__row x-striker-specs__row--value-only"
                : "x-striker-specs__row";

              return (
                <div className={rowClassName} key={rowKey}>
                  <dt
                    className={
                      row.valueOnly
                        ? "x-striker-specs__label sr-only"
                        : "x-striker-specs__label"
                    }
                  >
                    {row.valueOnly ? row.value : row.label}
                  </dt>
                  <dd
                    className={
                      row.megha
                        ? "x-striker-specs__value x-striker-specs__value--megha"
                        : "x-striker-specs__value"
                    }
                  >
                    <MeghaValue megha={row.megha} value={row.value} />
                  </dd>
                </div>
              );
            })}
          </dl>

          <ul className="megha-aircraft-content__tags">
            {tags.map((tag) => (
              <li className="megha-aircraft-content__tags-tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <aside
          ref={descRef}
          className="x-striker-desc megha-aircraft-content__desc"
          aria-label={descriptionLabel}
        >
          <span
            className="megha-aircraft-content__desc-line"
            aria-hidden="true"
          />
          <span className="x-striker-desc__connector" aria-hidden="true" />

          {descriptionParagraphs.map((paragraph) => (
            <p className="x-striker-desc__copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </aside>
      </div>

      {hasFooter ? (
        <div
          className="megha-aircraft-content__footer"
          aria-labelledby={footerLabel ? footerTitleId : undefined}
        >
          <div className="megha-aircraft-content__footer-inner">
            {footerLabel ? (
              <h2 id={footerTitleId} className="sr-only">
                {footerLabel}
              </h2>
            ) : null}

            {footerParagraphs.map((paragraph, index) => (
              <p
                className="megha-aircraft-content__footer-copy"
                key={typeof paragraph === "string" ? paragraph : index}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
