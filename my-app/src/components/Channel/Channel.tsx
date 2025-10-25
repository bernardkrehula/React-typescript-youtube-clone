import './Channel.css'

type Avatar = {
  height: string;
  url: string;
  width: string;
};

type ChannelDataType = {
  videoData: {
    channel: {
      title: string;
      avatar: Avatar[];
      channelId: string;
      descriptionSnippet: string;
    };
  };
  onClick: (value: string) => void;
};

const Channel = ({ videoData, onClick }: ChannelDataType) => {
  const { channel } = videoData;
  const { title, avatar, descriptionSnippet, channelId } = channel;

  const handleChannelData = () => {
    onClick(channelId);
  };

  return (
    <div className="channel-icon" onClick={handleChannelData}>
      <img src={avatar[1].url} />
      <div className="channel-icon-content">
        <h2>{title}</h2>
        <h3>{descriptionSnippet}</h3>
      </div>
    </div>
  );
};

export default Channel;
