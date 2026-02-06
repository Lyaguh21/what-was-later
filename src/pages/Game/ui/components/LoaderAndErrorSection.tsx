import {
  selectGameFirstEvent,
  selectGameSecondEvent,
  selectGameUsedIds,
} from "@/entities/game";
import { useAppSelector } from "@/shared/lib";
import { ButtonMenuControl } from "@/widgets/buttons-menu-control";

export default function LoaderAndErrorSection() {
  const useIds = useAppSelector(selectGameUsedIds);
  const firstEvent = useAppSelector(selectGameFirstEvent);
  const secondEvent = useAppSelector(selectGameSecondEvent);

  //* Ошибка при перезагрузке во время игры
  if (!firstEvent && !secondEvent && !useIds.length) {
    return (
      <div>
        <h2 className="text-white text-4xl font-bold mb-4">
          Похоже ваша игровая сессия прервалась :/
        </h2>
        <ButtonMenuControl />
      </div>
    );
  }

  //* Loader
  if (!firstEvent || !secondEvent) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-white text-2xl font-bold">Loading...</div>
      </div>
    );
  }
}
