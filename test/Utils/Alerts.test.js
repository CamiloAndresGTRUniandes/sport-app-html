import Swal from 'sweetalert2';
import { Alerts } from '../../src/pages/Utils/Alerts';

jest.mock('sweetalert2');

describe('Alerts', () => {
  let showMock= jest.fn();;

  beforeEach(() => {
    showMock = jest.fn();
    Swal.fire.mockReturnValue({ then: jest.fn() });
    Swal.mixin.mockReturnValue({ fire: showMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show success alert', () => {
    const { showAlertSuccess } = Alerts();
    showAlertSuccess('Title', 'Message');

    expect(Swal.mixin).not.toHaveBeenCalledWith({
      timer: 2500,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
    });
    expect(showMock).not.toHaveBeenCalledWith({
      title: 'Title',
      text: 'Message',
      icon: 'success',
    });
  });

  it('should show error alert', () => {
    const { showAlertError } = Alerts();
    showAlertError('Title', 'Message');

    expect(Swal.mixin).not.toHaveBeenCalled();
    
    expect(showMock).not.toHaveBeenCalledWith({
      title: 'Title',
      text: 'Message',
      icon: 'error',
    });
  });

  it('should show subscription alert', () => {
    const { showAlertSuscription } = Alerts();
    const event = {
      picture: 'path/to/picture',
      start: new Date(),
      end: new Date(),
    };
    showAlertSuscription('Title', 'Description', event, jest.fn());

    expect(Swal.fire).toHaveBeenCalledWith({
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      html: expect.any(String),
      showCloseButton: true,
      timer: 5500,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: expect.any(String),
      confirmButtonAriaLabel: expect.any(String),
      cancelButtonText: expect.any(String),
      cancelButtonAriaLabel: expect.any(String),
    });

    expect(showMock).toHaveBeenCalledTimes(0); // showMock should not have been called
  });
});
