import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { FooBarQuixService } from "./foo-bar-quix.service";
import { Result } from "./model/result";
 
describe("FooBarQuixService", () => {
  let httpTestingController: HttpTestingController;
  let fooBarQuixService: FooBarQuixService;
  let baseUrl = "http://localhost:8080/foo-bar-quix/";
  let r1: Result;
  let r27: Result;
  let r33: Result;
  let r53: Result;
  let r15: Result;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
 
    httpTestingController = TestBed.get(HttpTestingController);
    r1 = { result: '1'};
    r27 = { result: 'FooQuix'};
    r33 = { result: 'FooFooFoo'};
    r53 = { result: 'BarFoo'};
    r15= { result: 'FooBarBar'};
  });
 
  beforeEach(inject(
    [FooBarQuixService],
    (service: FooBarQuixService) => {
      fooBarQuixService = service;
    }
  ));

  it("should return convert number as the value 1", () => {
    let result: Result;
    fooBarQuixService.convertNumber(1).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl+'1'
    });
   
    req.flush([r1]);
   
    expect(result[0].result).toEqual(r1.result);
  });

  it("should return convert number as the value 27", () => {
    let result: Result;
    fooBarQuixService.convertNumber(27).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl+'27'
    });
   
    req.flush([r27]);
   
    expect(result[0].result).toEqual(r27.result);
  });

  it("should return convert number as the value 33", () => {
    let result: Result;
    fooBarQuixService.convertNumber(33).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl+'33'
    });
   
    req.flush([r33]);
   
    expect(result[0].result).toEqual(r33.result);
  });

  it("should return convert number as the value 53", () => {
    let result: Result;
    fooBarQuixService.convertNumber(53).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl+'53'
    });
   
    req.flush([r53]);
   
    expect(result[0].result).toEqual(r53.result);
  });

  it("should return convert number as the value 15", () => {
    let result: Result;
    fooBarQuixService.convertNumber(15).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl+'15'
    });
   
    req.flush([r15]);
   
    expect(result[0].result).toEqual(r15.result);
  });

});

