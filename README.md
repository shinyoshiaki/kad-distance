# simple-datachannel

#### Simple WebRTC data channels.

## features

- simple-peer like
- can make multi data-channels for a peer
## install

```
npm install simple-datachannel
```

## usage

For example manual signaling and send message each other through multi data-channels.

```js
import WebRTC from "simple-datachannel";
const peerOffer = new WebRTC();
const peerAnswer = new WebRTC();

peerOffer.makeOffer({ disable_stun: true });

peerOffer.ev.on("signal", sdp => {
  console.log("offer signal");
 
 peerAnswer.makeAnswer(sdp, { disable_stun: true });
 
 peerAnswer.ev.on("signal", sdp => {
    peerOffer.setAnswer(sdp);
  });
});

peerOffer.ev.once("connect", () => {
  console.log("offer connected");

  peerOffer.ev.on("data", data => console.log("ondata offer", data));
  
  peerOffer.send("hello", "test");
  peerOffer.send("test", "second");
});

peerAnswer.ev.once("connect", () => {
  console.log("answer connected");
  
  peerAnswer.ev.on("data", data => console.log("ondata answer", data));

  peerAnswer.send("hi", "test");
  peerAnswer.send("test!!", "third");
});
```

## events


### `ev.on('signal', function (data) {})`

Fired when the peer wants to send signaling data to the remote peer.

### `peer.on('connect', function () {})`

Fired when the peer connection and data channel are ready to use.

### `peer.on('disconnect', function () {})`

Fired when the peer connection and data channel disconnected.

### `peer.on('data', function (data) {})`

Received a message from the remote peer (via the data channel).

`data` will be either a `String` or a `Buffer/Uint8Array` 


## license

MIT. Copyright (c) [shinyoshiaki](https://twitter.com/ShinYoshiaki).