import { useState, useEffect, useRef } from 'react';
import {
  Layout,
  Button,
  Flex,
  Image,
  Input,
  Space,
  Avatar,
  Spin,
} from 'antd';
import { SendOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import logo from '../../assets/images/logo.png';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

// Utility: Clean and normalize markdown text
const cleanMarkdown = (text = '') => {
  return text
    // Fix bold with spaces, e.g. "** bold **" -> "**bold**"
    .replace(/\*\*\s*(.+?)\s*\*\*/g, '**$1**')
    // Replace 3+ new lines with 2 new lines max
    .replace(/\n{3,}/g, '\n\n')
    // Trim trailing spaces on lines
    .replace(/[ \t]+\n/g, '\n')
    .trim();
};

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const backgroundColor = 'rgba(228, 250, 238, 1)';

  // Greeting message based on time
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 6) return 'Good Night';
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }
  const greeting = getGreeting();

  const onSearch = async (value) => {
    if (!value.trim()) return;

    // Add user message
    const userMessage = { type: 'user', text: value };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true); // Start spinner

    try {
      const response = await fetch('http://localhost:8000/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: value }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();

      // Clean and normalize the bot's reply markdown
      const cleanedReply = cleanMarkdown(data.reply || "Sorry, I didn't get a response.");

      const botMessage = { type: 'bot', text: cleanedReply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        type: 'bot',
        text: `Error: ${error.message}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  // Scroll chat to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <Layout style={{ minHeight: '100vh', background: backgroundColor }}>
      <Header style={{ display: 'flex', alignItems: 'center', background: backgroundColor }}>
        <div style={{ marginLeft: 'auto' }}>
          <Flex gap="small" wrap>
            <Button type="primary">Log In</Button>
            <Button>Sign Up</Button>
          </Flex>
        </div>
      </Header>

      <Content style={{ padding: '0 10px' }}>
        <Flex justify="center">
          <Image width={100} src={logo} />
        </Flex>

        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <h1 style={{ marginBottom: '0px' }}>{greeting}! Welcome to AskMe</h1>
          <h2 style={{ marginTop: '0' }}>Can I help with any Information?</h2>
        </div>

        {/* Message area */}
        <div
          style={{
            maxWidth: 900,
            margin: '20px auto 20px',
            padding: 20,
            background: '#fff',
            borderRadius: 10,
            minHeight: 200,
            maxHeight: 550,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            gap: 10,
            fontSize: 16,
          }}
        >
          {messages.length === 0 ? (
            <p style={{ color: '#888', textAlign: 'center', marginTop: 40 }}>
              Start your Conversation...
            </p>
          ) : (
            messages.map((msg, index) => {
              const isUser = msg.type === 'user';
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: isUser ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: isUser ? 'row-reverse' : 'row',
                      alignItems: 'flex-start',
                      gap: 8,
                      maxWidth: '70%',
                    }}
                  >
                    <Avatar
                      style={{ backgroundColor: isUser ? '#1890ff' : '#52c41a' }}
                      icon={
                        isUser ? (
                          <UserOutlined style={{ fontSize: 20, lineHeight: 1, display: 'block' }} />
                        ) : (
                          <RobotOutlined style={{ fontSize: 20, lineHeight: 1, display: 'block', width: 20, height: 20 }} />
                        )
                      }
                    />
                    <div
                      style={{
                        background: isUser ? '#e6f7ff' : '#f6ffed',
                        padding: '0px 15px',
                        borderRadius: 12,
                        textAlign: 'left',
                        whiteSpace: 'pre-wrap',
                        lineHeight: 1.6,
                        wordBreak: 'break-word',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      }}
                    >
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Spinner shown when bot is responding */}
          {loading && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                padding: '10px 15px',
                background: '#f6ffed',
                borderRadius: 12,
                maxWidth: '70%',
                margin: '10px 0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Avatar style={{ backgroundColor: '#52c41a' }} icon={<RobotOutlined style={{ fontSize: 20, display: 'block' }} />} />
              <Spin size="small" />
              <span style={{ fontStyle: 'italic', color: '#555' }}>AskMe is typing...</span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input field */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <Space direction="vertical" style={{ width: '100%', maxWidth: 800 }}>
            <Search
              placeholder="Ask something..."
              allowClear
              onSearch={onSearch}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ fontSize: 16 }}
              size="large"
              enterButton={<SendOutlined />}
              autoFocus
              enterButtonProps={{ 'aria-label': 'Send message' }}
            />
          </Space>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', background: backgroundColor }}>
        All Copyright reserved ©{new Date().getFullYear()} by Noyon Chandra Saha.
      </Footer>
    </Layout>
  );
};

export default HomePage;
