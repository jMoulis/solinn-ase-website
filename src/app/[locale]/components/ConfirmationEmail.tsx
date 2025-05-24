import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text
} from '@react-email/components';

type ContactReplyProps = {
  name: string;
};

export default function ContactReply({ name }: ContactReplyProps) {
  return (
    <Html>
      <Head />
      <Preview>Merci pour votre message – Solinn ASE</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={{ marginBottom: '32px' }}>
            <Text style={heading}>Bonjour {name},</Text>

            <Text style={paragraph}>
              Merci pour votre message ! Nous avons bien reçu votre demande de
              contact concernant Solinn ASE.
            </Text>

            <Text style={paragraph}>
              Un membre de notre équipe reviendra vers vous très prochainement
              pour échanger avec vous sur vos besoins.
            </Text>

            <Text style={paragraph}>
              Bien à vous,
              <br />
              L’équipe Solinn
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Solinn ASE • contact@solinn.fr • www.solinn.fr
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#fffdf6',
  fontFamily: 'Arial, sans-serif'
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0ead4',
  padding: '40px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '40px auto'
};

const heading = {
  fontSize: '20px',
  color: '#cc6600',
  fontWeight: 'bold',
  marginBottom: '12px'
};

const paragraph = {
  fontSize: '16px',
  color: '#2a1d0f',
  lineHeight: '1.5',
  marginBottom: '16px'
};

const footer = {
  borderTop: '1px solid #f0ead4',
  paddingTop: '20px',
  textAlign: 'center' as const
};

const footerText = {
  fontSize: '12px',
  color: '#746c48'
};
