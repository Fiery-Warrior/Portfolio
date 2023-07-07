import React from 'react';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import NavbarSectionM from './NaviM/navim';

class SidePanel extends React.Component {
  state = {
    sidePanelOpen: false,
  };

  toggleSidePanel = () => {
    this.setState(prevState => ({
      sidePanelOpen: !prevState.sidePanelOpen,
    }));
  }

  handleAboutClick = () => {
    window.scrollBy(0, 50);
    this.closeNav();
  }

  handleExperienceClick = () => {
    window.scrollBy(0, 200);
    this.closeNav();
  }

  handleContactClick = () => {
    window.scrollBy(0, 300);
    this.closeNav();
  }

  closeNav = () => {
    this.setState({
      sidePanelOpen: false,
    });
  }

  render() {
    const { sidePanelOpen } = this.state;

    return (
      <div>
        <div id="mySidepanel" style={{
          width: sidePanelOpen ? '180px' : '0',
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundColor: '#fff',
          overflowX: 'hidden',
          transition: '0.5s',
          paddingTop: '60px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          {sidePanelOpen && (
            <button className="closebtn" onClick={this.closeNav} style={{
              position: 'absolute',
              top: '5px',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}>
              <RiCloseLine size={54} color="#3b6461" />
            </button>
          )}

          <NavbarSectionM/>


        </div>

        <button className="openbtn" onClick={this.toggleSidePanel} style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}>
          {sidePanelOpen ? (
            <RiCloseLine size={54} color="transparent" />
          ) : (
            <RiMenu2Line size={54} color="#3b6461" />
          )}
        </button>
      </div>
    );
  }
}

export default SidePanel;
