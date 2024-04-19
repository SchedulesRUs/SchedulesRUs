import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleInfoService } from './scheduleInfo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ScheduleInfo from '../entities/scheduleInfo.entity';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';
import { CreateScheduleDto } from '../dto/create-schedule.dto';

// Create an object of type ScheduleInfo
const scheduleInfo: ScheduleInfo = {
    id: 1,
    userId: 123,
    title: 'Example Schedule',
    allDay: true,
    color: '#FF0000',
    start: '2024-04-14T10:00:00Z',
    end: '2024-04-14T12:00:00Z',
    hour: '8'
  }

  

describe('ScheduleInfoService', () => {
  let service: ScheduleInfoService;
  let scheduleInfoRepository: Repository<ScheduleInfo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScheduleInfoService,
        {
          provide: getRepositoryToken(ScheduleInfo),
          useClass: Repository, // Use the real repository class
        },
      ],
    }).compile();

    service = module.get<ScheduleInfoService>(ScheduleInfoService);
    scheduleInfoRepository = module.get<Repository<ScheduleInfo>>(
      getRepositoryToken(ScheduleInfo),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getScheduleInfo', () => {
    it('should return an array of ScheduleInfo', async () => {
      // Arrange
      const mockScheduleInfos: ScheduleInfo[] = [{
        id: 1266,
        userId: 30,
        title: 'lisa',
        allDay: false,
        color: '#33ff57',
        start: '2024-04-06T17:00:00.000Z',
        end: '2024-04-07T04:00:00.000Z',
        hour: '11'
      }];
      jest.spyOn(scheduleInfoRepository, 'find').mockResolvedValue(mockScheduleInfos);

      // Act
      const result = await service.getScheduleInfo();

      // Assert
      expect(result).toEqual(mockScheduleInfos);
    });

    it('should throw an error if repository find method fails', async () => {
      // Arrange
      jest.spyOn(scheduleInfoRepository, 'find').mockRejectedValue(new Error('Database Error'));

      // Act & Assert
      await expect(service.getScheduleInfo()).rejects.toThrowError('Database Error');
    });
  });

  describe('createScheduleInfo', () => {
    it('should create a new ScheduleInfo', async () => {
      // Arrange

      const createDto : CreateScheduleDto = {
        id: 1,
        userId: 123,
        title: 'Example Schedule',
        allDay: true,
        color: '#FF0000',
        start: '2024-04-14T10:00:00Z',
        end: '2024-04-14T12:00:00Z',
        hour:'8'
      }
      const mockScheduleInfo: ScheduleInfo =scheduleInfo;
      jest.spyOn(scheduleInfoRepository, 'create').mockReturnValue(mockScheduleInfo);
      jest.spyOn(scheduleInfoRepository, 'save').mockResolvedValue(mockScheduleInfo);

      // Act
      const result = await service.createScheduleInfo(createDto);

      // Assert
      expect(result).toEqual(mockScheduleInfo);
    });
  });


});
