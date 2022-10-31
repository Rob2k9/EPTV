import _ from 'lodash';

export const generateM3u = (numChannels, uri, startChannel): string => {
  let m3uFile = '#EXTM3U';

  _.times(numChannels, (i) => {
    const channelNum = startChannel + i;
    m3uFile = `${m3uFile}\n#EXTINF:0 tvg-id="${channelNum}.eptv" channel-number="${channelNum}" tvg-chno="${channelNum}" tvg-name="ESPN Plus ${channelNum}" group-title="eptv", ESPN Plus ${channelNum}`;
    m3uFile = `${m3uFile}\n${uri}/channels/${channelNum}.m3u8\n`;
  });

  return m3uFile;
};
