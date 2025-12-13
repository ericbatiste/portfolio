import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Hr,
} from '@react-email/components';
import { EmailTemplateProps } from "@/types/contact";

export function EmailTemplate({ senderName, messageBody }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f6f9fc' }}>
        <Container style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
          <Heading style={{ color: '#4A90E2' }}>
            New Message from {senderName}
          </Heading>
          <Text style={{ lineHeight: '1.6', color: '#333' }}>
            {messageBody}
          </Text>
          <Hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />
          <Text style={{ fontSize: '0.9em', color: '#999' }}>
            This email was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}