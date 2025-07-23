
import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  company?: string;
  message: string;
  subject: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  company,
  message,
  subject
}) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#1e40af',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center'
      }}>
        <img 
          src="https://your-domain.com/lovable-uploads/de8b9fcf-cc14-4745-9b47-c3e181c55010.png" 
          alt="Nexshrim Technologies" 
          style={{
            height: '60px',
            marginBottom: '10px'
          }}
        />
        <h1 style={{
          margin: '0',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          New Contact Form Submission
        </h1>
      </div>

      {/* Content */}
      <div style={{
        padding: '30px'
      }}>
        <h2 style={{
          color: '#1e40af',
          fontSize: '20px',
          marginBottom: '20px',
          borderBottom: '2px solid #f59e0b',
          paddingBottom: '10px'
        }}>
          Contact Details
        </h2>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '6px',
          marginBottom: '20px'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <tr>
              <td style={{
                padding: '8px 0',
                fontWeight: 'bold',
                color: '#374151',
                width: '120px'
              }}>
                Name:
              </td>
              <td style={{
                padding: '8px 0',
                color: '#1f2937'
              }}>
                {name}
              </td>
            </tr>
            <tr>
              <td style={{
                padding: '8px 0',
                fontWeight: 'bold',
                color: '#374151'
              }}>
                Email:
              </td>
              <td style={{
                padding: '8px 0',
                color: '#1f2937'
              }}>
                <a href={`mailto:${email}`} style={{
                  color: '#1e40af',
                  textDecoration: 'none'
                }}>
                  {email}
                </a>
              </td>
            </tr>
            {company && (
              <tr>
                <td style={{
                  padding: '8px 0',
                  fontWeight: 'bold',
                  color: '#374151'
                }}>
                  Company:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#1f2937'
                }}>
                  {company}
                </td>
              </tr>
            )}
            <tr>
              <td style={{
                padding: '8px 0',
                fontWeight: 'bold',
                color: '#374151'
              }}>
                Subject:
              </td>
              <td style={{
                padding: '8px 0',
                color: '#1f2937'
              }}>
                {subject}
              </td>
            </tr>
          </table>
        </div>

        <h3 style={{
          color: '#1e40af',
          fontSize: '18px',
          marginBottom: '15px'
        }}>
          Message:
        </h3>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '6px',
          borderLeft: '4px solid #f59e0b',
          lineHeight: '1.6',
          color: '#1f2937'
        }}>
          {message.split('\n').map((line, index) => (
            <p key={index} style={{
              margin: index === 0 ? '0 0 10px 0' : '10px 0',
              fontSize: '16px'
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f0f9ff',
          borderRadius: '6px'
        }}>
          <p style={{
            margin: '0 0 15px 0',
            color: '#374151',
            fontSize: '16px'
          }}>
            Reply to this inquiry:
          </p>
          <a 
            href={`mailto:${email}?subject=Re: ${subject}`}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#1e40af',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Reply to {name}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0'
      }}>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '14px'
        }}>
          This email was sent from the Nexshrim Technologies contact form.
        </p>
        <p style={{
          margin: '5px 0 0 0',
          color: '#6b7280',
          fontSize: '14px'
        }}>
          Visit us at: <a href="https://nexshrimtechnology.com" style={{
            color: '#1e40af',
            textDecoration: 'none'
          }}>nexshrimtechnology.com</a>
        </p>
      </div>
    </div>
  );
};

// EmailJS integration helper
export const sendEmailTemplate = async (formData: EmailTemplateProps) => {
  // This is the template that will be sent via EmailJS
  const templateParams = {
    to_name: 'Nexshrim Team',
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || 'Not specified',
    subject: formData.subject,
    message: formData.message,
    // EmailJS will use this HTML template
    html_template: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1e40af; color: #ffffff; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #1e40af; font-size: 20px; margin-bottom: 20px; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">Contact Details</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
                <p><strong>Subject:</strong> ${formData.subject}</p>
              </div>
              <h3 style="color: #1e40af; font-size: 18px; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b; line-height: 1.6; color: #1f2937;">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">This email was sent from the Nexshrim Technologies contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `
  };

  return templateParams;
};

export default EmailTemplate;
