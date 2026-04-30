// app.jsx — root, routing, tweaks panel

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoVariant": "b",
  "accent": "#00b9d6",
  "showPhotography": true,
  "stripeStyle": "tricolor"
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = React.useState(() => (location.hash || '#home').slice(1));
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const onHash = () => setRoute((location.hash || '#home').slice(1));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (r) => {
    location.hash = '#' + r;
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Apply tweaks to root via CSS vars
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    if (t.stripeStyle === 'tricolor') {
      document.documentElement.style.setProperty('--sina-stripe',
        `linear-gradient(to right, var(--sina-navy) 0%, var(--sina-navy) 33.33%, var(--sina-cyan) 33.33%, var(--sina-cyan) 66.66%, var(--sina-mint) 66.66%, var(--sina-mint) 100%)`);
    } else if (t.stripeStyle === 'solid') {
      document.documentElement.style.setProperty('--sina-stripe', t.accent);
    } else if (t.stripeStyle === 'duotone') {
      document.documentElement.style.setProperty('--sina-stripe',
        `linear-gradient(to right, var(--sina-navy) 0%, var(--sina-navy) 50%, var(--sina-cyan) 50%, var(--sina-cyan) 100%)`);
    }
    document.body.style.setProperty('--photo-display', t.showPhotography ? 'block' : 'none');
  }, [t.accent, t.stripeStyle, t.showPhotography]);

  let body;
  if (route === 'services') body = <ServicesPage navigate={navigate}/>;
  else if (route === 'process') body = <ProcessPage navigate={navigate}/>;
  else if (route === 'markets') body = <MarketsPage navigate={navigate}/>;
  else if (route === 'contact') body = <ContactPage navigate={navigate}/>;
  else body = <HomePage navigate={navigate}/>;

  return (
    <div data-screen-label={`SINA — ${route}`} style={!t.showPhotography ? { '--photos-off': 1 } : {}}>
      {!t.showPhotography && (
        <style>{`
          .hero-photo, .photo-bg, .cta-band-photo { display: none !important; }
          .hero { background: var(--surface-soft); }
          .cta-band { background: var(--surface-soft); }
          .cell-photo { background: var(--surface-card); }
        `}</style>
      )}
      <TopNav active={route} onNavigate={navigate} logoVariant={t.logoVariant}/>
      {body}
      <Footer onNavigate={navigate}/>
      <WhatsAppButton/>

      <TweaksPanel title="SINA Tweaks">
        <TweakSection label="Brand mark"/>
        <TweakRadio
          label="Logo variant"
          value={t.logoVariant}
          options={[
            { value: 'a', label: 'Solid SE' },
            { value: 'b', label: 'Outlined' },
            { value: 'c', label: 'Shield' },
          ]}
          onChange={(v) => setTweak('logoVariant', v)}
        />
        <TweakSection label="Accent"/>
        <TweakColor
          label="Accent color"
          value={t.accent}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakRadio
          label="Stripe"
          value={t.stripeStyle}
          options={[
            { value: 'tricolor', label: 'Tricolor' },
            { value: 'duotone', label: 'Duotone' },
            { value: 'solid', label: 'Solid' },
          ]}
          onChange={(v) => setTweak('stripeStyle', v)}
        />
        <TweakSection label="Photography"/>
        <TweakToggle
          label="Show photography"
          value={t.showPhotography}
          onChange={(v) => setTweak('showPhotography', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
