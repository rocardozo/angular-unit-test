import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ServiceHttpService } from './service-http.service';

describe('testing HTTP service', () => {
  // creo un espia para el HttpClient para su metodo get de tipo jasmin.Spy
  let httpClientSpy: jasmine.SpyObj<HttpClient>;  
  let serviceHttp: ServiceHttpService;

  // ejecuto cada una de las instrucciones dentro del beforeEach para cada prueba
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // inyecto el espia al servicio 
    serviceHttp = new ServiceHttpService(httpClientSpy as any);
  });

  it('caso exitoso', () => {
    const expectedUsers = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'}
    ];
    // hago que el espia me retorne un observable (con el of) del array expectedUsers
    httpClientSpy.get.and.returnValue(of(expectedUsers));
    // cuando llame al metodo getUser no voy a ir a api sino al espia por haberlo declarado en el metodo get del objeto HtppClient 
    serviceHttp.getUser();

    /**
     * pruebas esperadas
     */
    // el largo del array debe ser 2
    expect(serviceHttp.users.length).toBe(2);

    // el primer elemento tiene que tener name A 
    expect(serviceHttp.users[0]['name']).toBe('A');

    // el metodo get del espia debe ser llamado una vez
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('caso erroneo', () => {

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    
    // hago que el espia me retorne un error del objeto errorResponse
    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    serviceHttp.getUser();

    // cuando me de error usuarios deben ser null
    expect(serviceHttp.users).toBeUndefined
    ();
  });

});