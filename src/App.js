import MainScreen from "./components/MainScreen/MainScreen.component";
import firepadRef, { db, firebaseHelpers, userName } from "./server/firebase";
import "./App.css";
import { useEffect } from "react";
import {
  setMainStream,
  addParticipant,
  setUser,
  removeParticipant,
  updateParticipant,
} from "./store/actioncreator";
import { connect } from "react-redux";

function App(props) {
  const getUserStream = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    return localStream;
  };

  useEffect(async () => {
    const stream = await getUserStream();
    stream.getVideoTracks()[0].enabled = false;
    props.setMainStream(stream);

    const connectedRef = firebaseHelpers.child(db, ".info/connected");
    const participantRef = firebaseHelpers.child(firepadRef, "participants");

    firebaseHelpers.onValue(connectedRef, (snap) => {
      if (snap.val()) {
        const defaultPreference = {
          audio: true,
          video: false,
          screen: false,
        };
        const userStatusRef = firebaseHelpers.push(participantRef);
        firebaseHelpers.set(userStatusRef, {
          userName,
          preferences: defaultPreference,
        });
        props.setUser({
          [userStatusRef.key]: { name: userName, ...defaultPreference },
        });
        // Note: onDisconnect is not available in v9, we'll handle cleanup differently
      }
    });
  }, []);

  const isUserSet = !!props.user;
  const isStreamSet = !!props.stream;

  useEffect(() => {
    if (isStreamSet && isUserSet) {
      const participantRef = firebaseHelpers.child(firepadRef, "participants");
      
      firebaseHelpers.onChildAdded(participantRef, (snap) => {
        const preferenceUpdateEvent = firebaseHelpers.child(participantRef, `${snap.key}/preferences`);
        firebaseHelpers.onChildChanged(preferenceUpdateEvent, (preferenceSnap) => {
          props.updateParticipant({
            [snap.key]: {
              [preferenceSnap.key]: preferenceSnap.val(),
            },
          });
        });
        const { userName: name, preferences = {} } = snap.val();
        props.addParticipant({
          [snap.key]: {
            name,
            ...preferences,
          },
        });
      });

      firebaseHelpers.onChildRemoved(participantRef, (snap) => {
        props.removeParticipant(snap.key);
      });
    }
  }, [isStreamSet, isUserSet]);

  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stream: state.mainStream,
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMainStream: (stream) => dispatch(setMainStream(stream)),
    addParticipant: (user) => dispatch(addParticipant(user)),
    setUser: (user) => dispatch(setUser(user)),
    removeParticipant: (userId) => dispatch(removeParticipant(userId)),
    updateParticipant: (user) => dispatch(updateParticipant(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
