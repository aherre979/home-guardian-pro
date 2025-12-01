import { CTAButton } from "@/components/CTAButton";
import { Highlight } from "@/components/Highlight";
import { GuaranteeBox } from "@/components/GuaranteeBox";
import { CheckCircle2, Shield, Users, Zap, Award, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary border-b-2 border-border py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Protección Legal Inmediata contra la Okupación
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        
        {/* Pre-headline */}
        <p className="text-center text-urgent font-bold text-xl md:text-2xl mb-4">
          No es una alarma es la prueba definitiva
        </p>

        {/* Main Headline */}
        <h1 className="sales-headline text-center mb-6">
          Cómo recuperar hacer que la policía actúe de inmediato ante un okupación… sin abogados, sin juicios y sin gastar 30.000€ en un procedimiento de desahucio
        </h1>

        {/* Post Headline */}
        <p className="sales-subheadline text-center mb-12">
          Funciona aunque no estés presente y hayan pasado horas, días o semanas desde la okupacion
        </p>

        {/* CTA */}
        <div className="text-center mb-16">
          <CTAButton>
            Protege tu hogar ahora →
          </CTAButton>
        </div>

        {/* Declaración Impactante */}
        <div className="bg-secondary p-6 md:p-8 rounded-lg mb-12 border-l-4 border-urgent">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            ¿Sabías que si un okupa entra en tu casa mientras estás fuera —aunque sea solo un par de horas— la policía no puede desalojarlo si no tienes la prueba exacta de que vives allí?
          </h2>
          
          <p className="text-lg mb-4">
            La mayoría de propietarios creen que esto "no puede pasarles", hasta que les pasa.
          </p>

          <p className="text-lg mb-4">
            Y cuando ocurre, descubren que sin esa prueba lo pierden todo: juicios de más de 23 meses, más de 30.000€ en costes y su vivienda destruida.
          </p>

          <p className="text-lg mb-4">
            <Highlight>Confiar en que el Gobierno proteja tu casa es casi un acto de fe.</Highlight><br />
            Las leyes no te priorizan a ti como propietario.<br />
            Por eso, aunque no sea justo, eres tú quien debe adelantarse y proteger su morada.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
          Déjame decirte quién debe seguir leyendo:
        </h3>

        <ul className="space-y-4 mb-12 text-lg">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0 mt-1" />
            <span>Si tienes una primera o segunda residencia y te preocupa la okupación</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0 mt-1" />
            <span>Si quieres ahorrar dinero, tiempo y disgustos evitando abogados, desplazamientos y reparaciones…</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0 mt-1" />
            <span>Si te importa tu salud, tu seguridad y tu paz mental…</span>
          </li>
        </ul>

        <p className="text-xl font-semibold text-center mb-12 text-urgent">
          Si estas dentro de al menos uno de esos 3 grupos, continúa leyendo.<br />
          Lo que estás a punto de descubrir podría ser lo que marque la diferencia entre perder tu casa… o protegerla para siempre.
        </p>

        {/* Problema */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            ¿Por qué un okupa se puede quedar en mi vivienda?
          </h2>

          <p className="text-xl font-bold mb-6 text-urgent">
            Este es el problema que encaras: tus documentos habituales no valen
          </p>

          <p className="text-xl mb-4">¿Cómo?</p>

          <p className="text-lg mb-6">
            Así es, <Highlight>nada de lo que tienes en tu casa demuestra que VIVES allí.</Highlight>
          </p>

          <ul className="space-y-3 mb-8 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-destructive font-bold">✗</span>
              <span>Escrituras → No valen.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-destructive font-bold">✗</span>
              <span>Facturas → No valen.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-destructive font-bold">✗</span>
              <span>Empadronamiento → No vale.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-destructive font-bold">✗</span>
              <span>DNI con tu dirección → No vale.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-destructive font-bold">✗</span>
              <span>Contratos → No vale.</span>
            </li>
          </ul>

          <p className="text-lg mb-6">
            Podría estar viviendo un inquilino y que tuvieses disposición de esos documentos.
          </p>

          <p className="text-xl font-bold mb-4">"Pero bueno, es mi propiedad"</p>

          <p className="text-lg mb-4">
            Tienes razón, si la ley estuviese bien construida sería suficiente.
          </p>

          <p className="text-lg mb-6">
            <Highlight>El problema es que tienes que demostrar que estás viviendo, no que seas titular:</Highlight>
          </p>

          <div className="bg-secondary p-6 rounded-lg mb-6 border-l-4 border-muted-foreground">
            <p className="text-lg font-semibold">
              Artículo 18 de la constitución "el domicilio es inviolable".<br />
              Domicilio = morada<br />
              morada = uso (no titularidad)
            </p>
          </div>

          <p className="text-xl font-bold text-urgent mb-8">
            Pero sigue leyendo porque eso no es lo peor…
          </p>
        </div>

        {/* Agitación */}
        <div className="mb-16 bg-destructive/10 p-6 md:p-8 rounded-lg border-2 border-destructive">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-destructive">
            El okupa puede utilizar esto para quedarse
          </h2>

          <p className="text-lg mb-4 font-semibold">Así es como funciona:</p>

          <ol className="space-y-3 mb-6 text-lg list-decimal list-inside">
            <li>Entran.</li>
            <li>Cambian la cerradura.</li>
            <li>Enseñan un ticket de comida o un recibo cualquiera.</li>
            <li>Dicen: "Vivo aquí."</li>
            <li>Y tú estás fuera sin poder demostrar lo contrario.</li>
          </ol>

          <p className="text-xl font-bold mb-6">
            Es absurdo… pero legal.
          </p>

          <p className="text-xl font-bold mb-4 text-urgent">
            "Me estás diciendo que con un ticket de comida pueden demostrar que viven ahí y yo con mis documentos habituales no"
          </p>

          <p className="text-lg mb-4">
            Mientras ellos están dentro con la cerradura cambiada, y tú estás fuera, la policía no puede saber quién vive realmente ahí.
          </p>

          <p className="text-lg mb-4">
            Y si los agentes se equivocan, pueden enfrentarse a sanciones muy graves. Por eso no arriesgan. Por eso no actúan. Por eso te dicen "esto va a juicio" …y ahí empieza tu infierno de 23 meses.
          </p>

          <div className="bg-background p-6 rounded-lg mt-6">
            <p className="text-xl font-bold text-center">
              <Highlight>No es culpa tuya. No es culpa de la policía. Es la ley… y ahora mismo está del lado del okupa.</Highlight>
            </p>
          </div>

          <p className="text-lg mt-6">
            Hasta que tengas una prueba de morada válida, ellos tienen una historia. Tú solo tienes papeles que no valen para nada.
          </p>
        </div>

        {/* Solución */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-trust">
            Pero quédate porque existe una solución
          </h2>

          <p className="text-xl font-bold mb-6">
            "Entonces, ¿cómo puedo demostrar que vivo ahí?"
          </p>

          <p className="text-lg mb-4">
            Puedes estar todos los días hacerte fotos o vídeos en tu casa. El problema es que estas fotos podrían no servir. Las autoridades pueden interpretar que están manipuladas
          </p>

          <p className="text-lg mb-6">
            Si tienes un vecino que te conoce, podría testificar a tu favor. La policía aquí estaría obligada a desalojar
          </p>

          <p className="text-xl font-bold mb-6">
            "¿Y si no tengo vecinos? ¿o están coaccionados o amenazados? ¿y si no están en ese momento?"
          </p>

          <div className="bg-gradient-to-r from-trust/20 to-accent/20 p-8 rounded-lg mb-8 border-2 border-trust">
            <p className="text-2xl font-bold mb-6 text-center">
              Por suerte para ti existe una solución eficaz:
            </p>
            <p className="text-3xl font-serif font-bold text-center text-urgent">
              El Certificado de Morada emitido por El Testigo – tu vecino virtual
            </p>
          </div>

          <p className="text-xl text-center mb-8 font-semibold">
            <Highlight>Mientras el okupa intenta tender un puente legal para quedarse en tu vivienda, tú construyes un puente legal aún más sólido por encima</Highlight>
          </p>

          <p className="text-lg mb-6">
            Y lo mejor: no lo emite ningún ayuntamiento ni entidad pública. Porque si dependieras de ellos —como ya sabes— seguirías sin solución
          </p>

          <p className="text-lg mb-8">
            Esto se ha tenido que hacer de manera privada, en colaboración con cuerpos y autoridades. No podemos seguir esperando a los que no quieren mover un dedo
          </p>
        </div>

        {/* Cómo Funciona */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            "Y ¿cómo funciona?"
          </h2>

          <p className="text-lg mb-6">Es muy sencillo:</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <p className="text-lg">Lo colocas en la cara interior de tu puerta, a la altura de los ojos.</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <p className="text-lg">Lo configuras una sola vez: te reconoce la cara (como tu móvil).</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <p className="text-lg">A partir de ahí, cada vez que entras o sales te identifica y registra tu presencia.</p>
            </div>
          </div>

          <p className="text-lg mb-4">
            No te hace fotos. No guarda imágenes. Solo verifica tu identidad en 0,5 segundos.
          </p>

          <p className="text-xl font-semibold text-center mb-4">
            Ni notarás que está ahí. Solo vivirás tranquilo
          </p>

          <p className="text-lg text-center mb-12 italic">
            Tu única preocupación será elegir las flores que le comprarás a tu mujer cuando llegues a casa
          </p>

          <div className="bg-accent/20 p-6 md:p-8 rounded-lg mb-8 border-2 border-accent">
            <h3 className="text-2xl font-bold mb-4">
              Es tan sencillo que lo instalas tú mismo en minutos
            </h3>
            <ul className="space-y-2 text-lg">
              <li>✓ Sin técnicos.</li>
              <li>✓ Sin citas.</li>
              <li>✓ Sin perder tu tiempo esperando a que venga nadie.</li>
              <li>✓ Sin abrir la puerta a desconocidos.</li>
              <li>✓ Sin pagar instalaciones.</li>
            </ul>
            <p className="text-xl font-bold mt-6">
              Solo sacas el dispositivo, lo pegas y listo.
            </p>
            <p className="text-lg">
              Lo que antes te llevaba horas y dolores de cabeza, ahora te lleva 2 minutos.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Desde la app descargas tu Certificado de Morada al instante
          </h3>

          <p className="text-lg mb-4">Con un clic tendrás:</p>
          <ul className="space-y-3 mb-8 text-lg">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0" />
              <span>Tu registro diario</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0" />
              <span>Tu prueba firmada con sello de tiempo</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0" />
              <span>Todo tu histórico</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0" />
              <span>Descargas ilimitadas</span>
            </li>
          </ul>

          <p className="text-lg mb-8">
            No perderás el tiempo en recopilar documentos que no sirven. Lo tendrás todo a golpe de click
          </p>

          <div className="bg-trust/10 p-6 md:p-8 rounded-lg border-2 border-trust">
            <h3 className="text-2xl font-bold mb-4 text-trust">
              ¿Y si me okupan?
            </h3>
            <p className="text-lg mb-4">Aquí viene la parte que aumentará tu calidad de vida:</p>
            <ol className="space-y-3 text-lg list-decimal list-inside mb-6">
              <li>Recibes un aviso automático de intrusión en tu móvil.</li>
              <li>Llamas al número dentro de la app.</li>
              <li>CASER se encarga de todo: denuncia, gestión, trámites, abogados y peritos.</li>
            </ol>
            <p className="text-lg mb-4">
              No tendrás que ir de despacho en despacho durante semanas ni explicárselo a la policía ni comprar pastillas de caída de pelo.
            </p>
            <p className="text-xl font-bold">
              Nosotros hacemos el trabajo duro. Tú solo sonreirás viendo cómo los desalojan.
            </p>
          </div>
        </div>

        {/* Comparación */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            ¿Y por qué no compro una alarma o una cámara?
          </h2>

          <p className="text-lg mb-6">
            Puedes hacerlo, pero si hablamos de okupación…
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-destructive/10 p-6 rounded-lg border-2 border-destructive">
              <p className="text-xl font-bold mb-3 text-destructive">✗ Una alarma</p>
              <p className="text-lg">NO demuestra que vives allí.</p>
            </div>
            <div className="bg-destructive/10 p-6 rounded-lg border-2 border-destructive">
              <p className="text-xl font-bold mb-3 text-destructive">✗ Una cámara</p>
              <p className="text-lg">NO demuestra que vives allí.</p>
            </div>
          </div>

          <div className="bg-trust/20 p-6 rounded-lg border-2 border-trust mb-8">
            <p className="text-2xl font-bold text-trust">✓ Tu Testigo</p>
            <p className="text-xl">SÍ demuestra que vives allí.</p>
          </div>

          <p className="text-lg mb-4">
            Las alarmas son reactivas. Y si se manipulan, inhiben o no avisan en ese momento… ya no te sirven para acreditar nada.
          </p>

          <p className="text-lg mb-6">
            Las cámaras son una pesadilla: horas de vídeo, gigas de almacenamiento, pruebas fácilmente impugnables, y encima tampoco acreditan morada.
          </p>

          <p className="text-xl font-bold text-center">
            <Highlight>No somos los mejores evitando robos, pero sí okupaciones, ¿en tu vivienda que te preocupa más?</Highlight>
          </p>
        </div>

        {/* CTA Intermedio */}
        <div className="text-center my-16 py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <p className="text-2xl font-bold mb-6">
            ¿Listo para proteger tu hogar con la prueba legal definitiva?
          </p>
          <CTAButton size="xl">
            Sí, quiero proteger mi casa ahora →
          </CTAButton>
        </div>

        {/* Segunda Residencia */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            "Pues sí que parece mejor para la okupación, ¿y mi segunda residencia cómo la protejo"
          </h2>

          <p className="text-xl font-bold mb-6">Con la ley en la mano.</p>

          <div className="bg-secondary p-6 rounded-lg mb-6 border-l-4 border-trust">
            <p className="text-lg font-semibold">
              El Tribunal Supremo ya lo dejó claro: Una segunda vivienda usada en fines de semana, verano o períodos concretos también es MORADA y tiene la misma protección penal.
            </p>
          </div>

          <p className="text-lg mb-6">
            Significa que tu casa de la playa, tu apartamento de la sierra o tu vivienda familiar también está protegida.
          </p>

          <p className="text-lg mb-4">
            Y con El Testigo, puedes demostrarlo sin estar allí.
          </p>

          <p className="text-xl font-semibold mb-4">
            Podrás irte de vacaciones sabiendo que no te están vaciando el armario.
          </p>

          <p className="text-lg italic">
            Solo pensarás en el aire fresco por el paseo marítimo, el olor a mar y la cerveza en el chiringuito
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">
            "¿Cuántas veces me tengo que registrar?"
          </h3>
          <p className="text-lg mb-8">
            No existe un número fijo. Solo tienes que demostrar que usas esa vivienda. Y tu Certificado de Morada lo hace automáticamente por ti.
          </p>

          <ul className="space-y-2 mb-12 text-lg">
            <li>✓ Sin pensar en cuando los desalojarán</li>
            <li>✓ Sin esfuerzo en negociar con los okupas</li>
            <li>✓ Sin preocuparte por tu salud</li>
          </ul>

          <h3 className="text-2xl font-bold mb-6">
            "¿Y si me doy cuenta pasadas 48h?"
          </h3>
          <p className="text-xl font-bold mb-4">Otro mito.</p>
          <p className="text-lg mb-4">
            Si puedes demostrar que es tu morada… da igual que hayan pasado 2 horas o 2 semanas.
          </p>
          <p className="text-lg mb-4">
            El delito sigue vigente. Y la policía puede actuar.
          </p>
          <p className="text-lg mb-6">
            El mito de las 48–72h existe solo porque la gente no puede demostrar que vive allí.
          </p>
          <p className="text-xl font-bold mb-4">Tú sí podrás.</p>
          <p className="text-xl font-bold mb-8">Y lo podrás hacer en segundos.</p>
          <p className="text-lg italic text-center">
            Sentirás que tienes más poder que un político que no sabe como resolver este problema
          </p>
        </div>

        {/* Bullets de Características */}
        <div className="mb-16 bg-gradient-to-br from-secondary to-accent/10 p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
            Y con lo que viene equipado te va a alucinar…
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Sensor inteligente de intrusión</h3>
                  <p>Detecta cualquier entrada o manipulación en segundos, así nadie podrá cambiar la cerradura sin que lo sepas al instante.</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Award className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Sellos notariales digitales</h3>
                  <p>Invierten la carga de la prueba y establecen tu morada de forma legalmente válida, permitiendo que las autoridades actúen sin dudar.</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Cartel disuasorio profesional</h3>
                  <p>Indica claramente que la vivienda tiene un morador acreditado, por lo que los okupas preferirán evitar tu casa.</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Zap className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Registro facial ultrarrápido</h3>
                  <p>Verifica tu identidad sin fotos ni vídeo en medio segundo, impidiendo que un okupa pueda hacerse pasar por ti.</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Certificados en la nube</h3>
                  <p>Todo tu historial queda guardado y accesible desde cualquier parte, garantizando que tu prueba no desaparece aunque destruyan el dispositivo.</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Clock className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Batería recargable de larga duración</h3>
                  <p>Hasta un año de autonomía real, para que no tengas que estar pendiente de comprar pilas</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Zap className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Instalación instantánea sin técnicos</h3>
                  <p>Lo colocas tú mismo en minutos, ahorrándote citas, esperas y un día entero perdido.</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Registro automático diario</h3>
                  <p>El Testigo trabaja solo, sin que tengas que recordar nada, dejando protegida tu vivienda incluso cuando tú no piensas en ello.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Validez Jurídica */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            ¿Cuál es la validez jurídica de todo esto?
          </h2>

          <p className="text-lg mb-6">
            Sabemos lo que estás pensando: "Todo esto suena muy bien… pero ¿tiene validez jurídica real?"
          </p>

          <p className="text-lg mb-6">
            Y es normal. Cuando se trata de tu casa, no te vale cualquier promesa.
          </p>

          <p className="text-xl font-bold mb-8">
            Por eso hemos construido Moradai con el respaldo legal más sólido posible, basándonos en normativa europea, en tecnología certificada y en expertos con décadas de experiencia.
          </p>

          <div className="space-y-8 mb-12">
            <div className="bg-secondary p-6 rounded-lg border-l-4 border-trust">
              <h3 className="text-xl font-bold mb-4">1. Tecnología con validez jurídica oficial en toda Europa</h3>
              <p className="text-lg mb-4">
                El Testigo se basa en sellos de tiempo cualificados, el mismo mecanismo que usan:
              </p>
              <ul className="space-y-2 text-lg mb-4">
                <li>• Notarios digitales</li>
                <li>• Administraciones públicas</li>
                <li>• Entidades financieras</li>
                <li>• Organismos judiciales</li>
              </ul>
              <p className="text-lg mb-4">
                Estos sellos están regulados por el Reglamento eIDAS, que es normativa europea y de obligado cumplimiento en España.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-bold text-lg">
                  <Highlight>No dependes de interpretaciones locales. Dependes de legislación europea superior.</Highlight>
                </p>
              </div>
              <p className="text-lg mt-4">
                Trabajamos con EADTrust (Garrigues), uno de los Prestadores de Servicios Cualificados más reconocidos en Europa.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg border-l-4 border-trust">
              <h3 className="text-xl font-bold mb-4">2. No solo dan validez jurídica… invierten la carga de la prueba</h3>
              <p className="text-lg mb-4">Esto es crucial:</p>
              <p className="text-xl font-bold">
                Obligan a la otra parte (el okupa) a demostrar que TU certificado es falso. Y eso, jurídicamente, es prácticamente imposible.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg border-l-4 border-trust">
              <h3 className="text-xl font-bold mb-4">3. Respaldado por un magistrado con más de 20 años de experiencia</h3>
              <p className="text-lg mb-4">Toda la solución jurídica ha sido revisada y validada por:</p>
              <p className="text-lg font-bold mb-2">Vicente Tovar (Magistrado en excedencia)</p>
              <ul className="space-y-2 text-lg mb-4">
                <li>• Más de 20 años ejerciendo en la carrera judicial.</li>
                <li>• Especialista en derecho penal, usurpación y procedimientos de desalojo.</li>
              </ul>
              <p className="text-lg">
                Puedes descargar su informe jurídico completo desde la propia app. No es una opinión. Es un informe técnico, firmado y fundamentado en derecho.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg border-l-4 border-trust">
              <h3 className="text-xl font-bold mb-4">4. Total alineamiento con la Instrucción 6/2020 de la Secretaría de Estado de Seguridad</h3>
              <p className="text-lg mb-4">
                Esta instrucción es la que dicta, por ley, cómo debe actuar la policía ante una okupación. Nosotros no nos inventamos nada:
              </p>
              <ul className="space-y-2 text-lg">
                <li>• Seguimos exactamente el protocolo oficial, punto por punto.</li>
                <li>• Entregamos la prueba exacta que la policía necesita para actuar.</li>
                <li>• Generamos el documento que evita que los agentes se arriesguen a sanciones.</li>
              </ul>
              <p className="text-xl font-bold mt-4">
                Cuando presentas un Certificado de Morada válido, los agentes deben actuar.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg border-l-4 border-trust">
              <h3 className="text-xl font-bold mb-4">5. En total consonancia con la Ley de Desahucio Exprés</h3>
              <p className="text-lg mb-4">
                La Ley de Desahucio Exprés exige aportar pruebas concluyentes de que ese inmueble es tu morada para que la policía pueda proceder al desalojo inmediato.
              </p>
              <p className="text-lg">
                Sin una prueba de morada sólida, la actuación policial se bloquea. Con una prueba válida —como el Certificado de Morada— los agentes ya tienen la evidencia concluyente que necesitan para actuar en el momento.
              </p>
            </div>
          </div>

          <div className="bg-accent/20 p-6 md:p-8 rounded-lg border-2 border-accent mb-8">
            <p className="text-lg mb-4">
              No preguntes en tu comisaria ni en tu despacho porque algunos (aún) no nos conocen. <span className="font-bold">Pero no importa porque van a estar obligados a desalojar igualmente.</span>
            </p>
            <p className="text-lg mb-4">
              Los agentes no actúan por marcas. Actúan por:
            </p>
            <ul className="space-y-2 text-lg mb-4">
              <li>• validez jurídica</li>
              <li>• pruebas objetivas</li>
              <li>• normativa</li>
              <li>• instrucciones oficiales</li>
            </ul>
            <p className="text-xl font-bold">
              Y nuestro certificado cumple todos esos requisitos.
            </p>
            <p className="text-lg mt-4 italic">
              Si no lo hacen podrían enfrentarse a sanciones muy duras. Sería como no arrestar a un asesino con la pistola en la mano en el lugar del crimen
            </p>
          </div>
        </div>

        {/* Prueba Social */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
            Validación de Expertos
          </h2>

          <p className="text-lg mb-8 text-center">
            No tenemos casos reales porque, sencillamente, <Highlight>nadie se atreve a ocupar una vivienda protegida con Moradai.</Highlight> Y eso, de por sí, ya es prueba de fuerza.
          </p>

          <p className="text-lg mb-8">
            Pero no tienes que creer solo lo que decimos nosotros. Aquí tienes la opinión de autoridades judiciales, policiales y del mundo de la seguridad privada, que sí pueden evaluar y validar esta tecnología.
          </p>

          <div className="space-y-6 mb-12">
            <div className="trust-badge p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">Vicente Tovar – Magistrado en excedencia, 20 años de carrera judicial</p>
              <p className="text-lg italic mb-2">
                "El Certificado de Morada aporta una solución jurídica crucial, ofreciendo una protección sin precedentes a los moradores."
              </p>
              <p className="text-lg italic">
                "La utilización de sellos de tiempo cualificado proporciona la validez y seguridad necesarias para permitir la actuación policial inmediata."
              </p>
            </div>

            <div className="trust-badge p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">Javier Mirallas</p>
              <p className="text-sm mb-2">Presidente ICS Intelligence • Ex Presidente de Prosegur Cataluña • Ex Consejero de Securitas España</p>
              <p className="text-lg italic mb-2">
                "La tecnología de Moradai presenta características excepcionales. Ofrece una respuesta eficaz y certificada contra la ocupación ilegal."
              </p>
              <p className="text-lg italic">
                "Es una contribución práctica que beneficia de forma significativa a los propietarios."
              </p>
            </div>

            <div className="trust-badge p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">Juan Carlos Fernández – Abogado, CEO de Tecnogados</p>
              <p className="text-lg italic mb-2">
                "En muchos casos, el ciudadano no tiene capacidad de prueba. Moradai lo cambia por completo."
              </p>
              <p className="text-lg italic">
                "El Certificado de Morada acredita el uso de la vivienda —primera o segunda residencia— y permite la actuación policial y la recuperación inmediata de la posesión."
              </p>
            </div>
          </div>

          <div className="bg-secondary p-6 md:p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Respaldado por las entidades más prestigiosas</h3>
            <p className="text-lg mb-6">
              Moradai está respaldado por algunas de las entidades más prestigiosas de España y Europa en materia de innovación, derecho y tecnología:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
              <span className="bg-background px-4 py-2 rounded">CASER Seguros</span>
              <span className="bg-background px-4 py-2 rounded">Lanzadera</span>
              <span className="bg-background px-4 py-2 rounded">Wayra Telefónica</span>
              <span className="bg-background px-4 py-2 rounded">Cuatrecasas Acelera</span>
            </div>
            <p className="text-lg mt-6 text-center italic">
              Este tipo de entidades no respaldan productos sin un nivel extremo de rigor tecnológico y jurídico.
            </p>
          </div>

          <div className="bg-secondary p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Apariciones en medios</h3>
            <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
              <span className="bg-background px-4 py-2 rounded">ABC</span>
              <span className="bg-background px-4 py-2 rounded">El Español</span>
              <span className="bg-background px-4 py-2 rounded">COPE</span>
              <span className="bg-background px-4 py-2 rounded">La Razón</span>
              <span className="bg-background px-4 py-2 rounded">Emprendedores</span>
              <span className="bg-background px-4 py-2 rounded">Europa Press</span>
            </div>
          </div>
        </div>

        {/* Oferta */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-urgent/10 to-accent/10 p-8 md:p-12 rounded-lg border-4 border-urgent">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
              Resumen de la Oferta
            </h2>

            <p className="text-xl mb-6 text-center">
              Sabemos que el precio es muy bajo para el servicio que damos
            </p>

            <p className="text-lg mb-8 text-center">
              Pero queremos llegar al máximo número de personas para acabar con este problema
            </p>

            <div className="bg-destructive text-destructive-foreground p-6 rounded-lg mb-8 text-center">
              <p className="text-2xl font-bold mb-2">⚠️ ATENCIÓN</p>
              <p className="text-xl">Ahora mismo se han agotado las unidades y el periodo de entrega lo tenemos en 3-4 semanas.</p>
              <p className="text-2xl font-bold mt-4">Solo quedan 150 unidades de este lote</p>
            </div>

            <h3 className="text-3xl font-serif font-bold mb-6">EL PLAN DE PROTECCIÓN TOTAL</h3>

            <div className="bg-background p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">El Testigo (hardware completo)</p>
                    <p>Sistema profesional de registro biométrico y alerta inmediata.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Descargas ilimitadas del Certificado de Morada</p>
                    <p>Todos los registros diarios, disponibles al instante y sin límites.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold mb-6 text-center text-urgent">
              ADEMÁS, TE VAMOS A REGALAR
            </h3>

            <div className="space-y-4 mb-8">
              <div className="bg-accent/30 p-6 rounded-lg border-2 border-accent">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-xl">Trámite Cero: Gestión Legal Express</p>
                  <p className="font-bold text-xl text-urgent">Valor: 349€</p>
                </div>
                <p className="text-lg">Gestión completa de denuncia y trámites jurídicos. Nosotros hacemos todo el papeleo por ti. Tú no pisas una comisaría. Tú no haces colas. Tú no pierdes días de trabajo.</p>
              </div>

              <div className="bg-accent/30 p-6 rounded-lg border-2 border-accent">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-xl">Escudo Legal Premium – Todo Incluido</p>
                  <p className="font-bold text-xl text-urgent">Valor: 3.000–7.000€</p>
                </div>
                <p className="text-lg">Costas judiciales cubiertas por Caser. Abogados, peritos y asistencia jurídica incluidos. El dinero que podrías haber perdido, te lo ahorras o lo inviertes donde quieras.</p>
              </div>

              <div className="bg-accent/30 p-6 rounded-lg border-2 border-accent">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-xl">Cartel Anti-Okupas Morada Certificada</p>
                  <p className="font-bold text-xl text-urgent">Valor: 19€</p>
                </div>
                <p className="text-lg">"Morada Certificada". Un aviso claro que hace que el okupa descarte tu vivienda.</p>
              </div>

              <div className="bg-accent/30 p-6 rounded-lg border-2 border-accent">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-xl">Escudo Grupal 5X</p>
                  <p className="font-bold text-xl text-urgent">Valor: 99€</p>
                </div>
                <p className="text-lg">Posibilidad de registrar hasta 5 convivientes. Tu pareja, tus hijos, tus padres, tus amigos. Cuantos más moradores acreditados, más protectores</p>
              </div>

              <div className="bg-accent/30 p-6 rounded-lg border-2 border-accent">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-xl">Configuración Zero Estrés</p>
                  <p className="font-bold text-xl text-urgent">Valor: 49€</p>
                </div>
                <p className="text-lg">Instalación guiada por videollamada. Es tan fácil que no la necesitarás, pero si te pierdes, estaremos contigo paso a paso.</p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-8">
              <p className="text-2xl font-bold mb-4 text-center">
                🎄 PROMOCIÓN "Navidad Legal, Protección Total"
              </p>
              <p className="text-xl text-center mb-6">
                SI CONTRATAS ANTES DEL 5 DE ENERO
              </p>

              <div className="space-y-4">
                <div className="bg-primary-foreground text-primary p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-lg">Pack Segunda Residencia (2x1)</p>
                    <p className="font-bold text-lg">Valor: 600€</p>
                  </div>
                  <p>Llévate un Testigo extra gratis para tu segunda vivienda.</p>
                </div>

                <div className="bg-primary-foreground text-primary p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-lg">Alerta Permanente – SIM Pro</p>
                    <p className="font-bold text-lg">Valor: 59€</p>
                  </div>
                  <p>Tarjeta SIM integrada gratis. Para que recibas alertas incluso sin WiFi o en caso de corte de suministros.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold mb-6 text-center">
              GARANTÍAS QUE TE QUITAN TODO EL RIESGO
            </h3>

            <div className="space-y-4 mb-8">
              <GuaranteeBox>
                <h4 className="text-2xl font-bold mb-3">✓ Garantía "Desalojo o Devolución total"</h4>
                <p className="text-lg">
                  Como sabemos que estamos seguros de que vamos a desalojar, si, en caso de ocupación, NO lo logramos te devolvemos todo lo que hayas pagado hasta la fecha.
                </p>
              </GuaranteeBox>

              <GuaranteeBox>
                <h4 className="text-2xl font-bold mb-3">✓ Garantía "2 años sin ocupación"</h4>
                <p className="text-lg">
                  Si durante los primeros 24 meses no te okupan, te descontamos el 90% de las cuotas siguientes. Sí, has leído bien: 90%.
                </p>
              </GuaranteeBox>

              <GuaranteeBox>
                <h4 className="text-2xl font-bold mb-3">✓ Garantía Testigo Nuevo, Sin Preguntas</h4>
                <p className="text-lg">
                  Si El Testigo se estropea el primer año, te lo enviamos nuevo sin coste.
                </p>
              </GuaranteeBox>
            </div>

            <div className="bg-destructive text-destructive-foreground p-6 rounded-lg mb-8">
              <p className="text-xl font-bold mb-4">⚠️ IMPORTANTE</p>
              <p className="text-lg mb-2">
                Este lote será probablemente el último de la versión actual.
              </p>
              <p className="text-lg">
                Estamos actualizando hardware y muchas funciones que ahora vienen incluidas pasarán a ser de pago. Cuando este lote se acabe: subirán precios, se eliminarán bonos, y algunas características dejarán de venir integradas.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">TODO ESTO INCLUIDO HOY:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-lg mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>El Testigo (detección incluida)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>Certificados ilimitados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>Gestión completa de denuncia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>Costas judiciales incluidas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>Cartel disuasorio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>Hasta 5 convivientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>Instalación guiada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>Testigo extra (2x1)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>SIM integrada gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span>3 Garantías totales</span>
                </div>
              </div>

              <div className="text-center pt-6 border-t-2 border-border">
                <p className="text-xl mb-2">Valor total real:</p>
                <p className="text-3xl font-bold line-through text-muted-foreground mb-4">3.500–7.000€+</p>
                <p className="text-2xl mb-2">Precio hoy:</p>
                <p className="text-6xl font-bold text-urgent mb-6">599,99 €</p>
              </div>
            </div>

            <div className="text-center">
              <CTAButton size="xl">
                SÍ, QUIERO PROTEGER MI HOGAR AHORA →
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Cierre con Urgencia */}
        <div className="mb-16">
          <p className="text-xl mb-6">
            Cuanto antes empieces a registrarte, antes comienzas a estar protegido. Cada día sin El Testigo es un día con riesgo. Cada registro diario es un ladrillo en tu muralla legal.
          </p>

          <p className="text-xl font-bold mb-4">No esperes a que te ocurra.</p>
          <p className="text-xl font-bold mb-4">No esperes a que te cambien la cerradura.</p>
          <p className="text-xl font-bold mb-8">No esperes a ver tu salón convertido en un mercadillo o tu baño como el de un bar.</p>

          <p className="text-2xl font-bold text-center mb-4">Mantenlo limpio</p>
          <p className="text-2xl font-bold text-center mb-8">Protege tu hogar hoy.</p>

          <div className="text-center">
            <CTAButton size="xl">
              Compra El Testigo ahora →
            </CTAButton>
          </div>
        </div>

        {/* PS Sections */}
        <div className="border-t-2 border-border pt-12 space-y-8">
          <div>
            <p className="text-2xl font-bold mb-4">P.D.</p>
            <p className="text-lg mb-4">
              Esta oferta —con todos los bonos, la SIM gratuita, el 2x1 y las garantías completas— solo está disponible hasta el 5 de enero.
            </p>
            <p className="text-lg mb-4">
              El siguiente lote llegará con hardware actualizado y muchas características pasarán a ser de pago. Si quieres proteger tu vivienda al precio actual y con todos los beneficios incluidos, este es el momento.
            </p>
            <p className="text-xl font-bold">No lo dejes pasar.</p>
            <p className="text-lg mt-4 italic">
              Además, ahorrarás al saber que es una compra de calidad porque te acostumbrarás a comprar cosas importantes
            </p>
            <p className="text-lg mt-4 italic">
              Porque hay dos cosas con las que un hombre no debe bromear: una es el negocio y otra el hogar
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-4">P.D. 2.</p>
            <p className="text-lg mb-4">
              Seamos sinceros: si no compras hoy, dentro de una semana tu casa seguirá exactamente igual de desprotegida. Y si un okupa entra, ya habrás perdido el único momento en el que podías haberlo evitado.
            </p>
            <p className="text-xl font-bold mb-4">
              <Highlight>Lo que más necesitas ahora no es otra alarma ni otro consejo… es una prueba jurídica real que funcione cuando más lo necesites.</Highlight>
            </p>
            <p className="text-lg mb-6">
              Instala El Testigo hoy, empieza a registrar desde esta misma semana, y dale a tu hogar la protección que merece.
            </p>
            <p className="text-xl font-bold text-center">
              Tu "yo del futuro" te lo agradecerá.
            </p>
          </div>

          <div className="text-center pt-8">
            <CTAButton size="xl">
              PROTEGER MI HOGAR DEFINITIVAMENTE →
            </CTAButton>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t-2 border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Moradai - Protección Legal contra la Okupación
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
